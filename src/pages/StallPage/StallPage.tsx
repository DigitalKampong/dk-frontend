import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, GridColumn, Progress, Rating } from 'semantic-ui-react';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getStall } from '../../services/stall';
import Stall from '../../types/Stall';
import styles from './StallPage.module.css';

const StallPage: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const [stall, setStall] = useState<Stall>();

  useEffect(() => {
    getStall(parseInt(params.id)).then(response => {
      setStall(response.data);
    });
  }, [params.id]); 

  return (
    <>
      <SearchHeader></SearchHeader>
      <div className={styles["site-content"]}>
        <Grid>
          <Grid.Column width={6}>
            <div className={styles["stall-image"]}></div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className={styles["stall-title"]}>
              {stall?.name}
            </div>
            <div className={styles["category-container"]}>
              <div className={styles["category-tag"]}>Chinese</div>
              <div className={styles["category-tag"]}>Singapore</div>
              <div className={styles["category-tag"]}>West</div>
              <div className={styles["category-tag"]}>Halal</div>
              <div className={styles["category-tag"]}>Traditional</div>
            </div>
            <div className={styles["location-primary"]}>
              Clementi Food Centre
            </div>
            <div className={styles["location-secondary"]}>
              26 Clementi Road, Singapore 101010
            </div>
            <div className={styles["ratings-container"]}>
              <Rating 
                icon='star' 
                size='massive' 
                defaultRating={stall ? Math.floor(stall.rating) : 0} 
                maxRating={5} 
                disabled
                className={styles["ratings-component"]}
              />
              <div className={styles["ratings-count"]}>2250 ratings</div>
            </div>
            <div className={styles["price-label"]}>
              $2.50/pax
            </div>
            <div className={styles["price-append"]}>
              +$0.30 for takeaway
            </div>
            <div className={styles["opening-hours-title"]}>
              Opening hours
            </div>
            <div className={styles["opening-hours-label"]}>
              MON - SAT : 0900 - 2300<br />
              SUN, PH : 1200 - 2100
            </div>
            <div className={styles["stall-button-container"]}>
              <Button className={styles["button-primary"]}>Favourite</Button>
              <Button basic className={styles["button-secondary"]}>Getting There</Button>
            </div>
          </Grid.Column>
          <GridColumn width={4}>
          </GridColumn>
        </Grid>
        <div className={styles["separator"]}></div>
        <div className={styles["section-header"]}>Products</div>
        <FoodGrid foodList={stall ? stall?.Products : []} />
        <div className={styles["separator"]}></div>
        <div className={styles["section-header"]}>
          Ratings {'&'} Reviews
          <Button className={styles["button-special"]}>Give review</Button>
        </div>
        <div className={styles['rating-component']}>
          <div>
            <div className={styles['comment-ratings-number']}>3.0/5</div>
            <Rating className={styles['comment-ratings']} maxRating={5} defaultRating={3} size='massive' icon='star' disabled/>
            <div className={styles['rating-count-label']}>2250 ratings</div>
          </div>
          <div>
            <div className={styles['rating-row']}>
              <Rating maxRating={5} defaultRating={1} size='massive' icon='star' disabled />
              <Progress className={styles['rating-row-progress']} percent={40} warning />
              <div className={styles['rating-row-count']}>200</div>
            </div>
            <div className={styles['rating-row']}>
              <Rating maxRating={5} defaultRating={2} size='massive' icon='star' disabled />
              <Progress className={styles['rating-row-progress']} percent={60} warning />
              <div className={styles['rating-row-count']}>300</div>
            </div>
            <div className={styles['rating-row']}>
              <Rating maxRating={5} defaultRating={3} size='massive' icon='star' disabled />
              <Progress className={styles['rating-row-progress']} percent={80} warning />
              <div className={styles['rating-row-count']}>1200</div>
            </div>
            <div className={styles['rating-row']}>
              <Rating maxRating={5} defaultRating={4} size='massive' icon='star' disabled />
              <Progress className={styles['rating-row-progress']} percent={20} warning />
              <div className={styles['rating-row-count']}>20</div>
            </div>
            <div className={styles['rating-row']}>
              <Rating maxRating={5} defaultRating={5} size='massive' icon='star' disabled />
              <Progress className={styles['rating-row-progress']} percent={5} warning />
              <div className={styles['rating-row-count']}>10</div>
            </div>
          </div>
        </div>
        <div className={styles['review-header']}>Product Reviews</div>
        <div className={styles['review-card']}>
          <div className={styles['review-card-row']}>
            <div>
              <Rating maxRating={5} defaultRating={4} size='massive' icon='star' disabled />
              <div className={styles['comment-username']}>by James Wang</div>
            </div>
            <div className={styles['comment-date']}>
              08 Aug 2020
            </div>
          </div>
          <div className={styles['comment-text']}>Great food, helpful stall owner! Would definitely come again!</div>
        </div>
        <div className={styles['review-card']}>
          <div className={styles['review-card-row']}>
            <div>
              <Rating maxRating={5} defaultRating={4} size='massive' icon='star' disabled />
              <div className={styles['comment-username']}>by James Wang</div>
            </div>
            <div className={styles['comment-date']}>
              08 May 2020
            </div>
          </div>
          <div className={styles['comment-text']}>Really love their steamed chicken! The steamed chicken rice set is a must try!!</div>
        </div>
        <div className={styles['review-card']}>
          <div className={styles['review-card-row']}>
            <div>
              <Rating maxRating={5} defaultRating={4} size='massive' icon='star' disabled />
              <div className={styles['comment-username']}>by Thomas Lim</div>
            </div>
            <div className={styles['comment-date']}>
              08 May 2020
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StallPage;