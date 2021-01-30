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
    if (filter.length === 0) {
      getAllHawkers().then((response) => {
        setHawkers(response.data);
        console.log(response.data);
      });
    } else {
      setFilteredHawkers(filterLocation(filter));
      console.log(filter);
    }
  }, [filter, isFiltered]); // eslint-disable-line react-hooks/exhaustive-deps

  function filterLocation(location: string) {
    const result = hawkers.filter((hawker) => {
      return hawker.Region.name === location;
    });
    return result;
  }

  function handleSetFilter(currentFilter: string) {
    const pressed = currentFilter === filter && isFiltered === true;
    if (pressed) {
      setFilter('');
      changeFilteredStatus(false);
    } else {
      setFilter(currentFilter);
      changeFilteredStatus(true);
    }
  }

  return (
    <>
      <SearchHeader isSearchPage={false} setQuery={() => {}}></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['location-filters-row']}>
          <div className={styles['site-content-header']}>
            <b> All Hawker Centres </b>
          </div>
          <div className={styles['filter-buttons']}>
            <Button basic onClick={() => handleSetFilter('East')}>
              {' '}
              East{' '}
            </Button>
            <Button basic onClick={() => handleSetFilter('West')}>
              {' '}
              West{' '}
            </Button>
            <Button basic onClick={() => handleSetFilter('Central')}>
              {' '}
              Central{' '}
            </Button>
            <Button basic onClick={() => handleSetFilter('NorthEast')}>
              {' '}
              NorthEast{' '}
            </Button>
            <Button basic onClick={() => handleSetFilter('South')}>
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
