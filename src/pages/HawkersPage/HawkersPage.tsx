import React, { useEffect, useState } from 'react';
import { getAllHawkers } from '../../services/hawker';
import styles from './HawkersPage.module.scss';
import { Button, Dropdown, Pagination } from 'semantic-ui-react';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import HawkerCentre from '../../types/HawkerCentre';
import isMobile from '../../mobile';

const HawkerLocationPage: React.FunctionComponent = () => {
  const [hawkers, setHawkers] = useState<HawkerCentre[]>([]);
  const [filter, setFilter] = useState('');
  const [isFiltered, changeFilteredStatus] = useState(false);
  const [filteredHawkers, setFilteredHawkers] = useState<HawkerCentre[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (filter.length === 0) {
      getAllHawkers().then((response) => {
        setHawkers(response.data);
      });
    } else {
      setFilteredHawkers(filterLocation(filter));
      console.log(filter);
    }
  }, [filter, isFiltered]); // eslint-disable-line react-hooks/exhaustive-deps

  //actual filtering of the hawker
  function filterLocation(location: string) {
    const result = hawkers.filter((hawker) => {
      return hawker.Region.name === location;
    });
    return result;
  }

  //changing of the status of the filter button
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

  //Pagination
  const hawkersPerPage = 5;
  const pagesVisited = pageNumber * hawkersPerPage;
  const pageNum = Math.ceil(hawkers.length / hawkersPerPage);
  const filteredPageNum = Math.ceil(filteredHawkers.length / hawkersPerPage);

  const hawkerPagination = hawkers.slice(pagesVisited, pagesVisited + hawkersPerPage);
  const filteredPagination = filteredHawkers.slice(pagesVisited, pagesVisited + hawkersPerPage);

  const changePage = (event: any) => {
    setPageNumber(event.target.getAttribute('value') - 1);
  };

  return (
    <>
      <SearchHeader toggleFilterNavBar={() => {}} isSearchPage={false} setQuery={() => {}}></SearchHeader>
      <div className={styles['site-content']}>
        {!isMobile() && (
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
        )}
        {isMobile() && (
          <>
            <div className={styles['site-content-filter']}>
              <div className={styles['site-content-header']}> All Hawker Center</div>
              <Dropdown text="Location" icon="filter" floating labeled button className={styles['dropdown']}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSetFilter('')}>All</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSetFilter('East')}>East</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSetFilter('West')}>West</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSetFilter('Central')}>Central</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSetFilter('NorthEast')}>NorthEast</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSetFilter('South')}>South</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={styles['separator']}></div>
          </>
        )}

        <div className={styles['hawker-list']}>
          <HawkerGrid hawkerList={filter === '' ? hawkerPagination : filteredPagination} />
        </div>
        <div className={styles['pagination']}>
          <Pagination totalPages={filter === '' ? pageNum : filteredPageNum} defaultActivePage={1} onPageChange={changePage}></Pagination>
        </div>
      </div>
    </>
  );
};

export default HawkerLocationPage;
