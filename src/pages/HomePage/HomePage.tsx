import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import styles from './HomePage.module.css';
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

const HomePage: React.FunctionComponent = () => {
  const history: any = useHistory();
  const [stalls, setStalls] = useState<Stall[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllStalls(12, 1).then((response) => {
      console.log(response);
      setStalls(response.data.rows);
    });
  }, []);

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
            <b>Featured</b> merchants
          </div>
          <div className={styles['section-header-button']}>View more</div>
        </div>
        <StallGrid stallList={stalls} />
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Explore</b> by Categories
          </div>
          <div className={styles['section-header-button']}>View more</div>
        </div>
        <div className={styles['category-grid']}>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(1)}>
            <img className={styles['cat-img']} src={catChinese} alt="" />
            <div className={styles['category-grid-label']}>Chinese</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(4)}>
            <img className={styles['cat-img']} src={catMalay} alt="" />
            <div className={styles['category-grid-label']}>Malay</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(3)}>
            <img className={styles['cat-img']} src={catIndian} alt="" />
            <div className={styles['category-grid-label']}>Indian</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(2)}>
            <img className={styles['cat-img']} src={catWestern} alt="" />
            <div className={styles['category-grid-label']}>Western</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(6)}>
            <img className={styles['cat-img']} src={catJapanese} alt="" />
            <div className={styles['category-grid-label']}>Japanese</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(5)}>
            <img className={styles['cat-img']} src={catKorean} alt="" />
            <div className={styles['category-grid-label']}>Korean</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(8)}>
            <img className={styles['cat-img']} src={catSea} alt="" />
            <div className={styles['category-grid-label']}>Thai</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleCategory(10)}>
            <img className={styles['cat-img']} src={catDessert} alt="" />
            <div className={styles['category-grid-label']}>Dessert</div>
          </div>
        </div>
        <div className={styles['section-header-row']}>
          <div className={styles['section-header']}>
            <b>Explore</b> by Locations
          </div>
        </div>
        <div className={styles['location-grid']}>
          <div className={styles['category-grid-cell']} onClick={() => handleLocation(1)}>
            <img className={styles['cat-img']} src={locNorth} alt="" />
            <div className={styles['category-grid-label']}>North</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleLocation(5)}>
            <img className={styles['cat-img']} src={locCentral} alt="" />
            <div className={styles['category-grid-label']}>Northeast</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleLocation(4)}>
            <img className={styles['cat-img']} src={locNortheast} alt="" />
            <div className={styles['category-grid-label']}>Central</div>
          </div>
          <div className={styles['category-grid-cell']} onClick={() => handleLocation(2)}>
            <img className={styles['cat-img']} src={locEast} alt="" />
            <div className={styles['category-grid-label']}>East</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locWest} alt="" onClick={() => handleLocation(3)} />
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
            <div className={styles['category-grid-cell']}>
              <div className={styles['category-grid-label']}>View all stalls</div>
            </div>
          </Link>
          <Link to="/hawkers">
            <div className={styles['category-grid-cell']}>
              <div className={styles['category-grid-label']}>View all Hawker centres</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
