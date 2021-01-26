import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import styles from './SearchPage.module.css';
import { Checkbox } from 'semantic-ui-react';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import Stall from '../../types/Stall';
import { searchStall } from '../../services/stall';

const SearchPage: React.FunctionComponent = () => {
  const queryString = require('query-string');
  const location = useLocation();

  const params = useParams<{ query: string }>();
  const searchParams = queryString.parse(location.search);

  const [stalls, setStalls] = useState<Stall[]>([]);
  const [query, setQuery] = useState<string>(params.query ? params.query : '');

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentParams: string = queryString.stringify(searchParams);
    searchStall(query, currentParams).then((response) => {
      setStalls(response.data.rows);
    });
  }, [query]);

  return (
    <>
      <SearchHeader isSearchPage={true} setQuery={setQuery} />
      <div className={styles['search-div']}>
        <div className={styles['filter-div']}>
          <div id="checkbox" className={styles['checkbox-div']}>
            <b>Cuisine</b>
            <Checkbox name="cuisine" label="Chinese" value="Chinese" />
            <Checkbox name="cuisine" label="Muslim" value="Muslim" />
            <Checkbox name="cuisine" label="Western" value="Western" />
            <b>Location</b>
            <Checkbox name="location" label="North" value="North" />
            <Checkbox name="location" label="South" value="South" />
            <Checkbox name="location" label="East" value="East" />
            <Checkbox name="location" label="West" value="West" />
            <Checkbox name="location" label="Central" value="Central" />
          </div>
        </div>
        <div className={styles['result-div']}>
          <div className={styles['site-content']}>
            <div className={styles['section-search-header-row']}>
              <div className={styles['section-search-header']}>
                <b>{query !== '' ? 'Search result for ' + query : 'All stalls'}</b>
              </div>
            </div>
            <StallGrid stallList={stalls} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;

/*
  useEffect(() => {
    searchStall(query).then((response) => {
      setOriginalStalls(response.data);
      setStalls(filterStalls(response.data));
    });
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setStalls(() => filterStalls(originalStalls));
  }, [ratingFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  function filterStalls(stalls: Stall[]): any {
    return stalls;
    //(cuisineFilter.includes(s.cuisine) ||
    //locationFilter.includes(s.location)) &&
    //s.rating > ratingFilter;
  }

  function filterByCuisine(e: any, data: any): void {
    if (data.checked) {
      setCuisineFilter(() => [...cuisineFilter, data.value]);
    } else {
      setCuisineFilter(() => cuisineFilter.splice(cuisineFilter.indexOf(data.value), 1));
    }
  }

  function filterByLocation(e: any, data: any): void {
    if (data.checked) {
      setLocationFilter(() => [...locationFilter, data.value]);
    } else {
      setLocationFilter(() => locationFilter.splice(locationFilter.indexOf(data.value), 1));
    }
  }

  function filterByRating(e: any): void {
    setRatingFilter(e.target.value);
  }
  */
