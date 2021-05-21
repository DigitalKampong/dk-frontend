import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Progress, Rating } from 'semantic-ui-react';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getStall } from '../../services/stall';
import { getReviewForStall } from '../../services/review';
import Stall from '../../types/Stall';
import TimeSpan from '../../types/Stall';
import Review, { ReviewTransferObject } from '../../types/Review';
import GiveReviewModal from '../../components/GiveReviewModal/GiveReviewModal';
import styles from './StallPage.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import isMobile from '../../mobile';
import { createFavourite, deleteFavouriteStalls, getFavourite } from '../../services/favourite';

const StallPage: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const currentUsername = localStorage.getItem('username');
  const [stall, setStall] = useState<Stall>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const userIsLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [isGiveReviewModalOpen, setIsGiveReviewModalOpen] = useState(false);

  const setGiveReviewModalOpen = (target: boolean) => {
    setIsGiveReviewModalOpen(target);
    fetchReviews();
  };

  const fetchReviews = useCallback(() => {
    getReviewForStall(parseInt(params.id)).then((response) => {
      setReviews(
        response.data.map((x: ReviewTransferObject) => {
          return {
            rating: x.rating,
            description: x.description,
            updatedAt: Date.parse(x.updatedAt),
            username: x.User.username,
            id: x.id,
          };
        }),
      );
    });
  }, [params.id]);

  const [favStall, setFavStall] = useState([]);
  const [isClicked, changeClickedStatus] = useState(false);
  const [clickedColor, changeClickedColor] = useState('#FFC448');
  const [currentImage, setCurrentImage] = useState(0);

  const fetchFavStalls = useCallback(() => {
    getFavourite().then((response) => {
      setFavStall(response.data);
    });
    for (const i in favStall) {
      if (favStall && parseInt(params.id) === favStall[i]['stallId']) {
        changeClickedStatus(true);
        changeClickedColor('#FF5C38');
      }
    }
  }, [favStall, params.id]);

  useEffect(() => {
    getStall(parseInt(params.id)).then((response) => {
      setStall(response.data);
    });
    fetchReviews();
    fetchFavStalls();
  }, [params.id, fetchReviews, fetchFavStalls]);

  const favouriteStall = (id: number) => {
    if (isClicked === false && clickedColor === '#FFC448') {
      createFavourite(id);
      changeClickedStatus(true);
      changeClickedColor('#FF5C38');
    } else {
      deleteFavouriteStalls(id);
      changeClickedStatus(false);
      changeClickedColor('#FFC448');
    }
  };

  const onMapButtonClick = () => {
    window.open(`https://www.google.com.sg/maps/search/${stall?.HawkerCentre.lat},${stall?.HawkerCentre.lng}/`);
  };

  const averageRating = useMemo(() => {
    if (reviews.length !== 0) {
      return reviews.map((x) => x.rating).reduce((a, b) => a + b) / reviews.length;
    } else {
      return 0;
    }
  }, [reviews]);

  const ratingCounts = useMemo(() => {
    return [5, 4, 3, 2, 1].map((x) => {
      return reviews.filter((y) => y.rating === x).length;
    });
  }, [reviews]);

  const progressBarLevels = useMemo(() => {
    if (ratingCounts.some((x) => x !== 0)) {
      const maxCount = ratingCounts.reduce((a, b) => (a >= b ? a : b));
      return ratingCounts.map((x) => {
        return (x / maxCount) * 100;
      });
    } else {
      return [0, 0, 0, 0, 0];
    }
  }, [ratingCounts]);

  const currentUserReview = useMemo(() => {
    return reviews.find((x) => x.username === currentUsername);
  }, [reviews, currentUsername]);

  const formatDate = useCallback((date) => {
    if (date !== undefined && date !== '') {
      var myDate = new Date(date);
      var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][myDate.getMonth()];
      var str = myDate.getDate() + ' ' + month + ' ' + myDate.getFullYear();
      return str;
    }
    return '';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkIsClosed = useCallback((openingHours) => {
    if (openingHours === undefined || openingHours === null) {
      return false;
    }
    const today: Date = new Date();
    const totalCurrentMinutes: number = today.getHours() * 60 + today.getMinutes();
    const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timespan: TimeSpan = openingHours[days[today.getDay() - 1]] ? openingHours[days[today.getDay() - 1]] : null;
    if (timespan === null || timespan.allDay || timespan.start === null || timespan.end === null) {
      return false;
    } else if (timespan.closed) {
      return true;
    }
    const totalStartMinutes: number = parseInt(timespan.start.substring(0, 2)) * 60 + parseInt(timespan.start.substring(3));
    const totalEndMinutes: number = parseInt(timespan.end.substring(0, 2)) * 60 + parseInt(timespan.end.substring(3));
    return totalCurrentMinutes < totalStartMinutes || totalCurrentMinutes > totalEndMinutes;
  }, []);

  const isClosedShown: boolean = checkIsClosed(stall?.openingHours) || stall?.HawkerCentre.isClosed ? true : false;
  return (
    <>
      <SearchHeader toggleFilterNavBar={() => {}} isSearchPage={false} setQuery={() => {}}></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['stall-grid']}>
          <div className={styles['stall-image-holder']}>
            <img className={styles['stall-image']} src={stall?.Images[currentImage]?.downloadUrl} alt="stall"></img>
            <div className={styles['image-grid']}>
              {stall?.Images[0]?.downloadUrl && (
                <img className={styles['image-cell']} src={stall?.Images[0]?.downloadUrl} alt="stall" onClick={() => setCurrentImage(0)}></img>
              )}
              {stall?.Images[1]?.downloadUrl && (
                <img className={styles['image-cell']} src={stall?.Images[1]?.downloadUrl} alt="stall" onClick={() => setCurrentImage(1)}></img>
              )}
              {stall?.Images[2]?.downloadUrl && (
                <img className={styles['image-cell']} src={stall?.Images[2]?.downloadUrl} alt="stall" onClick={() => setCurrentImage(2)}></img>
              )}
              {stall?.Images[3]?.downloadUrl && (
                <img className={styles['image-cell']} src={stall?.Images[3]?.downloadUrl} alt="stall" onClick={() => setCurrentImage(3)}></img>
              )}
            </div>
          </div>
          <div className={styles['stall-details']}>
            <div className={styles['stall-header']}>
              <div className={styles['stall-title']}>{stall?.name}</div>
              {checkIsClosed(stall?.openingHours) || isClosedShown ? <div className={styles['stall-closed']}>CLOSED</div> : null}
            </div>
            <div className={styles['category-container']}>
              {stall?.categories &&
                stall.categories.map((category) => (
                  <div className={styles['category-tag']} key={category.name}>
                    {category.name}
                  </div>
                ))}
            </div>
            <div className={styles['location-primary']}>{stall?.HawkerCentre.name}</div>
            <div className={styles['location-secondary']}>{stall?.HawkerCentre.address}</div>
            <div className={styles['ratings-container']}>
              <Rating
                icon="star"
                size={isMobile() ? 'small' : 'massive'}
                rating={averageRating}
                maxRating={5}
                disabled
                className={styles['ratings-component']}
              />
              <div className={styles['ratings-count']}>{reviews.length} ratings</div>
            </div>
            <div className={styles['opening-hours-title']}>Opening hours</div>
            {stall?.openingHours &&
              ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((x) => {
                return (
                  stall.openingHours[x] && (
                    <div key={x} className={styles['opening-hours-label']}>
                      {x} :{' '}
                      {stall.openingHours[x].closed
                        ? 'Closed'
                        : stall.openingHours[x].allDay
                        ? 'All Day'
                        : `${stall.openingHours[x].start} - ${stall.openingHours[x].end}`}
                    </div>
                  )
                );
              })}
            <div className={styles['announcement-title']}>{stall?.HawkerCentre?.announcement}</div>
            {!isMobile() && (
              <div className={styles['stall-button-container']}>
                <Button
                  style={{ backgroundColor: clickedColor }}
                  className={styles['button-primary']}
                  onClick={() => favouriteStall(parseInt(params.id))}
                  disabled={!userIsLoggedIn}
                >
                  Favourite
                </Button>
                <Button basic className={styles['button-secondary']} onClick={onMapButtonClick}>
                  How to go
                </Button>
              </div>
            )}
          </div>
        </div>
        {isMobile() && (
          <div className={styles['stall-button-container']}>
            <Button
              style={{ backgroundColor: clickedColor }}
              className={styles['button-primary']}
              onClick={() => favouriteStall(parseInt(params.id))}
              disabled={!userIsLoggedIn}
            >
              Favourite
            </Button>
            <Button basic className={styles['button-secondary']} onClick={onMapButtonClick}>
              How to go
            </Button>
          </div>
        )}
        <div className={styles['separator']}></div>
        <div className={styles['section-header']}>Products</div>
        <FoodGrid foodList={stall ? stall?.Products : []} />
        <div className={styles['separator']}></div>
        <div className={styles['section-header']}>
          Ratings {'&'} Reviews
          <Button className={styles['button-special']} onClick={() => setGiveReviewModalOpen(true)} disabled={!userIsLoggedIn}>
            {currentUserReview ? 'Edit' : 'Give'} review
          </Button>
        </div>
        <div className={styles['rating-component']}>
          <div>
            <div className={styles['comment-ratings-number']}>{averageRating !== 0 ? averageRating.toFixed(1) : '---'}/5</div>
            <Rating
              className={styles['comment-ratings']}
              maxRating={5}
              rating={averageRating}
              size={isMobile() ? undefined : 'massive'}
              icon="star"
              disabled
            />
            <div className={styles['rating-count-label']}>{reviews.length} ratings</div>
          </div>
          <div>
            {[5, 4, 3, 2, 1].map((x, idx) => (
              <div key={x} className={styles['rating-row']}>
                <Rating maxRating={5} defaultRating={x} size={isMobile() ? 'tiny' : 'massive'} icon="star" disabled />
                <Progress className={styles['rating-row-progress']} percent={progressBarLevels[idx]} warning />
                <div className={styles['rating-row-count']}>{ratingCounts[idx]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['review-header']}>Product Reviews</div>
        {reviews.length !== 0 ? (
          reviews.map((x) => (
            <div className={styles['review-card']} key={x.username}>
              <div className={styles['review-card-row']}>
                <div>
                  <Rating maxRating={5} rating={x.rating} size={isMobile() ? undefined : 'massive'} icon="star" disabled />
                  <div className={styles['comment-username']}>by {x.username}</div>
                </div>
                <div className={styles['comment-date']}>{formatDate(x.updatedAt)}</div>
              </div>
              <div className={styles['comment-text']}>{x.description}</div>
            </div>
          ))
        ) : (
          <div className={styles['comment-text']}>No reviews yet!</div>
        )}
      </div>
      <GiveReviewModal isOpen={isGiveReviewModalOpen} setModalOpen={setGiveReviewModalOpen} stall={stall} reviewBeforeEdit={currentUserReview} />
    </>
  );
};

export default StallPage;
