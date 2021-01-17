import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import { searchStall } from '../../services/stall';
import styles from './SearchPage.module.css';
import { Checkbox, Rating } from 'semantic-ui-react';
import SearchPageHeader from '../../components/SearchPageHeader/SearchPageHeader';
import Stall from '../../types/Stall';

interface StateProps {
  searchInput: string;
}

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as StateProps;

  const [stalls, setStalls] = useState<Stall[]>([]);
  const [originalStalls, setOriginalStalls] = useState<Stall[]>([]);
  const [query, setQuery] = useState<string>(state.searchInput);
  const [cuisineFilter, setCuisineFilter] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  useEffect(() => {
    searchStall(query).then(response => {
      setOriginalStalls(response.data);
      setStalls(filterStalls(response.data));
    })
  }, [query]);

  useEffect(() => {
    setStalls(() => filterStalls(originalStalls))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratingFilter])

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
      setCuisineFilter(() => cuisineFilter.splice(cuisineFilter.indexOf(data.value), 1))
    }
  }

  function filterByLocation(e: any, data: any): void {
    if (data.checked) {
      setLocationFilter(() => [...locationFilter, data.value]);
    } else {
      setLocationFilter(() => locationFilter.splice(locationFilter.indexOf(data.value), 1))
    }
  }

  function filterByRating(e: any): void {
    setRatingFilter(e.target.value);
  }

  return (
    <>
      <SearchPageHeader searchInput={state.searchInput} handleSearch={setQuery}></SearchPageHeader>
      <div className={styles['search-div']}>
        <div className={styles['filter-div']}>
          <div id="checkbox" className={styles['checkbox-div']}>
            <b>Cuisine</b>
            <Checkbox
              name="cuisine"
              label="Chinese"
              value="Chinese"
              onChange={filterByCuisine}
            />
            <Checkbox
              name="cuisine"
              label="Muslim"
              value="Muslim"
              onChange={filterByCuisine}
            />
            <Checkbox
              name="cuisine"
              label="Western"
              value="Western"
              onChange={filterByCuisine}
            />
            <b>Location</b>
            <Checkbox
              name="location"
              label="North"
              value="North"
              onChange={filterByLocation}
            />
            <Checkbox
              name="location"
              label="South"
              value="South"
              onChange={filterByLocation}
            />
            <Checkbox
              name="location"
              label="East"
              value="East"
              onChange={filterByLocation}
            />
            <Checkbox
              name="location"
              label="West"
              value="West"
              onChange={filterByLocation}
            />
            <Checkbox
              name="location"
              label="Central"
              value="Central"
              onChange={filterByLocation}
            />
            <b>Rating {'>'} {ratingFilter}</b>
            <input
              type='range'
              min={0}
              max={5}
              value={ratingFilter}
              onChange={filterByRating}
            />
            <br />
            <Rating rating={ratingFilter} maxRating={5}/>
          </div>
        </div>
        <div className={styles['result-div']}>
          <div className={styles["site-content"]}>
            <div className={styles["section-search-header-row"]}>
              <div className={styles["section-search-header"]}>
                <b>
                  {query !== "" 
                  ? "Search result for " + query
                  : "All stalls"}
                </b>
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