import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import { searchStall } from '../../services/stall';
import styles from './SearchPage.module.css';
import { Checkbox } from 'semantic-ui-react';
import SearchPageHeader from '../../components/SearchPageHeader/SearchPageHeader';
import Stall from '../../types/Stall';

interface StateProps {
  searchInput: string;
  locationInput?: string;
}

const SearchPage: React.FunctionComponent = () => {
  const location = useLocation();
  const state = location.state as StateProps;

  const [stalls, setStalls] = useState<Stall[]>([]);
  const [originalStalls, setOriginalStalls] = useState<Stall[]>([]);
  const [query, setQuery] = useState<string>('');

  const [locationFilter, setLocationFilter] = useState<string[]>(state.locationInput ? [state.locationInput] : []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const filterStalls = (stalls: Stall[]) => {
      return stalls.filter((s) => {
        return locationFilter.includes(s['HawkerCentre']['Region']['name']);
      });
    };
    searchStall(query).then((response) => {
      setOriginalStalls(response.data);
      setStalls(() => filterStalls(response.data));
    });
  }, [query, locationFilter]);

  useEffect(() => {
    const filterStalls = (stalls: Stall[]) => {
      return stalls.filter((s) => {
        return locationFilter.includes(s['HawkerCentre']['Region']['name']);
      });
    };

    if (locationFilter.length === 0) {
      setStalls(originalStalls);
    } else {
      setStalls(() => filterStalls(originalStalls));
    }
  }, [locationFilter, originalStalls]);

  function filterByLocation(e: any, data: any): void {
    if (data.checked) {
      setLocationFilter(() => [...locationFilter, data.value]);
    } else {
      setLocationFilter(() => locationFilter.filter((e: string) => e !== data.value));
    }
  }

  function checkIfCheckedByLocation(value: string): boolean {
    return locationFilter.includes(value);
  }

  return (
    <>
      <SearchPageHeader searchInput={state.searchInput} handleSearch={setQuery}></SearchPageHeader>
      <div className={styles['search-div']}>
        <div className={styles['filter-div']}>
          <div id="checkbox" className={styles['checkbox-div']}>
            <b>Cuisine</b>
            <Checkbox name="cuisine" label="Chinese" value="Chinese" />
            <Checkbox name="cuisine" label="Malay" value="Malay" />
            <Checkbox name="cuisine" label="Western" value="Western" />
            <b>Location</b>
            <Checkbox name="location" label="North" value="North" onChange={filterByLocation} checked={checkIfCheckedByLocation('North')} />
            <Checkbox name="location" label="South" value="South" onChange={filterByLocation} checked={checkIfCheckedByLocation('South')} />
            <Checkbox name="location" label="East" value="East" onChange={filterByLocation} checked={checkIfCheckedByLocation('East')} />
            <Checkbox name="location" label="West" value="West" onChange={filterByLocation} checked={checkIfCheckedByLocation('West')} />
            <Checkbox name="location" label="Central" value="Central" onChange={filterByLocation} checked={checkIfCheckedByLocation('Central')} />
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
  <b>
    Rating {'>'} {ratingFilter}
  </b>
  <input type="range" min={0} max={5} value={ratingFilter} onChange={filterByRating} />
  <br />
  <Rating rating={ratingFilter} maxRating={5} />

    function filterByCuisine(e: any, data: any): void {
    if (data.checked) {
      setCuisineFilter(() => [...cuisineFilter, data.value]);
    } else {
      setCuisineFilter(() => cuisineFilter.filter((e: string) => e !== data.value));
    }
  }

    const [cuisineFilter, setCuisineFilter] = useState<string[]>([]);
*/
