import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getAllStalls, searchStall } from '../../services/stall';
import { SearchProps } from '../../types/Search';
import './SearchPage.css';

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as SearchProps;
  const [stalls, setStalls] = useState([]);
  const [query, setQuery] = useState(state.searchInput);

  useEffect(() => {
    if (!query || query.length === 0) {
      getAllStalls().then(response => {
        setStalls(response.data);
      })
    } else {
      searchStall(query).then(response => {
        setStalls(response.data);
      })
    }
  }, [query]);
  
  return (
    <>
      <SearchHeader searchInput={query} handleChange={(q: string) => setQuery(q)}></SearchHeader>
      <div className="site-content">
        <div className="section-search-header-row">
          <div className="section-search-header">
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