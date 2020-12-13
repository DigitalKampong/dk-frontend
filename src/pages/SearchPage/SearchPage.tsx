import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StallGrid from '../../components/StallGrid/StallGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getAllStalls } from '../../services/stall';
import { SearchProps } from '../../types/Search';
import './SearchPage.css';

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as SearchProps;

  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    getAllStalls().then(response => {
      setStalls(response.data);
    })
  })

  function searchStalls(): void {
    getAllStalls().then(response => {
      setStalls(response.data);
    })
  }
  
  return (
    <>
      <SearchHeader searchInput={state.searchInput}></SearchHeader>
      <div className="site-content">
        <div className="section-search-header-row">
          <div className="section-search-header">
            <b>
              {state.searchInput !== "" 
              ? "Search result for " + state.searchInput
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