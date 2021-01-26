import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
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
  const [stalls, setStalls] = useState<Stall[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllStalls(12, 1).then((response) => {
      console.log(response);
      setStalls(response.data.rows);
    });
  }, []);

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
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catChinese} alt="" />
            <div className={styles['category-grid-label']}>Chinese</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catMalay} alt="" />
            <div className={styles['category-grid-label']}>Malay</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catIndian} alt="" />
            <div className={styles['category-grid-label']}>Indian</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catWestern} alt="" />
            <div className={styles['category-grid-label']}>Western</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catJapanese} alt="" />
            <div className={styles['category-grid-label']}>Japanese</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catKorean} alt="" />
            <div className={styles['category-grid-label']}>Korean</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={catSea} alt="" />
            <div className={styles['category-grid-label']}>SEA</div>
          </div>
          <div className={styles['category-grid-cell']}>
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
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locNorth} alt="" />
            <div className={styles['category-grid-label']}>North</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locCentral} alt="" />
            <div className={styles['category-grid-label']}>South</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locNortheast} alt="" />
            <div className={styles['category-grid-label']}>Central</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locEast} alt="" />
            <div className={styles['category-grid-label']}>East</div>
          </div>
          <div className={styles['category-grid-cell']}>
            <img className={styles['cat-img']} src={locWest} alt="" />
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
