import React, { useEffect, useState } from 'react';
import { getAllHawkers } from '../../services/hawker';
import styles from './HawkersPage.module.css';
import { Button } from 'semantic-ui-react';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import HawkerCentre from '../../types/HawkerCentre';

const HawkerLocationPage: React.FunctionComponent = () => {
  const [hawkers, setHawkers] = useState<HawkerCentre[]>([]);
  const [filter, setFilter] = useState('');
  const [isFiltered, changeFilteredStatus] = useState(false);
  const [filteredHawkers, setFilteredHawkers] = useState<HawkerCentre[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (filter.length === 0 && !isFiltered) {
      getAllHawkers().then((response) => {
        setHawkers(response.data);
        console.log(response.data);
      });
    } else {
      changeFilteredStatus(true);
      setFilteredHawkers(filterLocation(filter));
      console.log('hello');
    }
  }, [filter, isFiltered]); // eslint-disable-line react-hooks/exhaustive-deps

  function filterLocation(location: string) {
    const result = hawkers.filter((hawker) => {
      return hawker.Region.name === location;
    });
    return result;
  }

  /*
  function addOrRemoveFilter(item) {
    if(filter.includes(item)){
      const filteredItems = filter.filter(filteredItem => filteredItem !== item)
      setFilter([...filteredItems])
    } else{
      setFilter([...filter,item])
    }
  }
  */

  return (
    <>
      <SearchHeader></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['location-filters-row']}>
          <div className={styles['site-content-header']}>
            <b> All Hawker Centres </b>
          </div>
          <div className={styles['filter-buttons']}>
            <Button basic onClick={() => setFilter('East')}>
              {' '}
              East{' '}
            </Button>
            <Button basic onClick={() => setFilter('West')}>
              {' '}
              West{' '}
            </Button>
            <Button basic onClick={() => setFilter('Central')}>
              {' '}
              Central{' '}
            </Button>
            <Button basic onClick={() => setFilter('NorthEast')}>
              {' '}
              NorthEast{' '}
            </Button>
            <Button basic onClick={() => setFilter('South')}>
              {' '}
              South
            </Button>
          </div>
        </div>
        <div className={styles['hawker-list']}>
          <HawkerGrid hawkerList={filter === '' ? hawkers : filteredHawkers} />
        </div>
      </div>
    </>
  );
};

export default HawkerLocationPage;
