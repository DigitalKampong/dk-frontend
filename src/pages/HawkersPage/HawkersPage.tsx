import React, { useEffect, useState } from 'react';
import { getAllHawkers } from '../../services/hawker';
import styles from './HawkersPage.module.css';
import { Button } from 'semantic-ui-react';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import HawkerCentre from '../../types/HawkerCentre';

const HawkerLocationPage: React.FunctionComponent = () => {
  const [hawkers, setHawkers] = useState<HawkerCentre[]>([]);

  useEffect(() => {
    getAllHawkers().then((response) => {
      window.scrollTo(0, 0);
      setHawkers(response.data);
    });
  }, []);

  return (
    <>
      <SearchHeader></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['site-content-header']}>
          <b> Directory </b> of Hawker Centres:
        </div>
        <div className={styles['location-filters-row']}>
          <div className={styles['location-filters-header']}> All Hawker Centers </div>
          <Button basic> East </Button>
          <Button basic> West </Button>
          <Button basic> Central </Button>
          <Button basic> North </Button>
          <Button basic> South</Button>
        </div>
        <div className={styles['hawker-list']}>
          <HawkerGrid hawkerList={hawkers} />
        </div>
      </div>
    </>
  );
};

export default HawkerLocationPage;

/*
        <div className={styles["map-content"]}></div>
*/
