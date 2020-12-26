import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { searchStall } from '../../services/stall';
import { SearchProps } from '../../types/Search';
import styles from './SearchPage.module.css';
import { Checkbox } from 'semantic-ui-react';

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as SearchProps;

  const [stalls, setStalls] = useState([]);
  const [query, setQuery] = useState(state.searchInput);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    searchStall(query).then(response => {
      setStalls(filterStalls(response.data));
    })
  }, [query, filters]);

  function filterStalls(stalls: any[]): any {
    if (filters === []) {
      return stalls;
    }
    return stalls;
  }

  function handleFilter(e: any, data: any) {
    setFilters(filters => [...filters, data.value]);
  }

  
  return (
    <>
      <SearchHeader searchInput={query} handleChange={(q: string) => setQuery(q)}></SearchHeader>
      <div className={styles['search-div']}>
        <div className={styles['filter-div']}>
          <div id="checkbox" className={styles['checkbox-div']}>
            <b>Cuisine</b>
            <Checkbox
              label="Chinese"
              value="Chinese"
              onChange={handleFilter}
            />
            <Checkbox
              label="Muslim"
            />
            <Checkbox
              label="Western"
            />
            <b>Rating</b>
            <Checkbox
              label="Above 1 star"
            />
            <Checkbox
              label="Above 2 star"
            />
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