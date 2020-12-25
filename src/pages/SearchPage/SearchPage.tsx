import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getAllStalls, searchStall } from '../../services/stall';
import { SearchProps } from '../../types/Search';
import styles from './SearchPage.module.css';

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as SearchProps;
  const [stalls, setStalls] = useState([]);
  const [query, setQuery] = useState(state.searchInput);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    if (!query || query.length === 0) {
      getAllStalls().then(response => {
        setStalls(filterStalls(response.data));
      })
    } else {
      searchStall(query).then(response => {
        setStalls(filterStalls(response.data));
      })
    }
  }, [query, filters]);

  function filterStalls(stalls: any[]): any {
    if (filters === "") {
      return stalls;
    }
    return stalls.filter((s: any) => s[filters] > 1);
  }
  
  return (
    <>
      <SearchHeader searchInput={query} handleChange={(q: string) => setQuery(q)}></SearchHeader>
      <button onClick={() => {setFilters("rating"); console.log(filters);}}>Filter by rating</button>
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
    </>
  );
};

export default SearchPage;