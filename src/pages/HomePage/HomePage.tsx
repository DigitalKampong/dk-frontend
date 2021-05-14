import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import styles from './HomePage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { getAllStalls } from '../../services/stall';
import {
  catChinese,
  catMalay,
  catIndian,
  catWestern,
  catJapanese,
  catKorean,
  catSea,
  catDessert,
  locNorth,
  locNortheast,
  locCentral,
  locEast,
  locWest,
} from '../../images/image_modules';
import StallGrid from '../../components/StallGrid/StallGrid';
import Stall from '../../types/Stall';
import isMobile from '../../mobile';
import FeaturedStallGrid from '../../components/FeaturedStallGrid/FeaturedStallGrid';

const HomePage: React.FunctionComponent = () => {
  const history: any = useHistory();
  const [stalls, setStalls] = useState<Stall[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllStalls(12, 1).then((response) => {
      setStalls(response.data.rows);
    });
  }, []);

  function featuredHawkers() {
    const featuredHawkersArray = stalls.filter((stall) => stall.isFeatured === true);
    return featuredHawkersArray;
  }

  function handleCategory(cat: number): void {
    history.push({
      pathname: `/search/`,
      search: '?limit=20&page=1&category=' + cat,
    });
  }

  function handleLocation(loc: number): void {
    history.push({
      pathname: `/search/`,
      search: '?limit=20&page=1&region=' + loc,
    });
  }

  return (
    <>
      <SiteHeader></SiteHeader>
      <div className={styles['site-content']}>
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Featured</b> Hawkers
          </div>
          <div className={styles['section-header-button']}>View more</div>
        </div>
        {isMobile() ? <FeaturedStallGrid stallList={featuredHawkers()} /> : <StallGrid stallList={featuredHawkers()} />}
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Explore</b> by Categories
          </div>
          <div className={styles['section-header-button']}>View more</div>
        </div>
        <div className={styles['category-grid']}>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(1)} style={{ backgroundImage: `url(${catChinese})` }}>
            <div className={styles['category-grid-label']}>Chinese</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(4)} style={{ backgroundImage: `url(${catMalay})` }}>
            <div className={styles['category-grid-label']}>Malay</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(3)} style={{ backgroundImage: `url(${catIndian})` }}>
            <div className={styles['category-grid-label']}>Indian</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(2)} style={{ backgroundImage: `url(${catWestern})` }}>
            <div className={styles['category-grid-label']}>Western</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(6)} style={{ backgroundImage: `url(${catJapanese})` }}>
            <div className={styles['category-grid-label']}>Japanese</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(5)} style={{ backgroundImage: `url(${catKorean})` }}>
            <div className={styles['category-grid-label']}>Korean</div>
          </div>
          {!isMobile() && (
            <div className={styles['category-grid-cell']} onClick={() => handleCategory(8)} style={{ backgroundImage: `url(${catSea})` }}>
              <div className={styles['category-grid-label']}>Thai</div>
            </div>
          )}
          {!isMobile() && (
            <div className={styles['category-grid-cell']} onClick={() => handleCategory(10)} style={{ backgroundImage: `url(${catDessert})` }}>
              <div className={styles['category-grid-label']}>Dessert</div>
            </div>
          )}
        </div>
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Explore</b> by Locations
          </div>
        </div>
        <div className={styles['location-grid']}>
          <div className={styles['location-grid-cell']} onClick={() => handleLocation(1)} style={{ backgroundImage: `url(${locNorth})` }}>
            <div className={styles['category-grid-label']}>North</div>
          </div>
          <div className={styles['location-grid-cell']} onClick={() => handleLocation(5)} style={{ backgroundImage: `url(${locCentral})` }}>
            <div className={styles['category-grid-label']}>{isMobile() ? 'North-east' : 'Northeast'}</div>
          </div>
          <div className={styles['location-grid-cell']} onClick={() => handleLocation(4)} style={{ backgroundImage: `url(${locNortheast})` }}>
            <div className={styles['category-grid-label']}>Central</div>
          </div>
          <div className={styles['location-grid-cell']} onClick={() => handleLocation(2)} style={{ backgroundImage: `url(${locEast})` }}>
            <div className={styles['category-grid-label']}>East</div>
          </div>
          <div className={styles['location-grid-cell']} onClick={() => handleLocation(3)} style={{ backgroundImage: `url(${locWest})` }}>
            <div className={styles['category-grid-label']}>West</div>
          </div>
        </div>
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Explore</b> by Directories
          </div>
        </div>
        <div className={styles['directory-grid']}>
          <Link to={{ pathname: '/search', state: { searchInput: '' } }}>
            <div className={styles['directory-grid-cell']}>
              <div className={styles['category-grid-label']}>View all stalls</div>
            </div>
          </Link>
          <Link to="/hawkers">
            <div className={styles['directory-grid-cell']}>
              <div className={styles['category-grid-label']}>View all Hawker centres</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
