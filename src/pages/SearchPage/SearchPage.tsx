import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../../services/product';
import { SearchProps } from '../../types/Search';
import './SearchPage.css';

const SearchPage: React.FunctionComponent = () => {

  const location = useLocation();
  const state = location.state as SearchProps;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
    })
  })
  
  return (
    <>
      <SiteHeader searchInput={state.searchInput}></SiteHeader>
      <div className="site-content">
        <div className="section-search-header-row">
          <div className="section-search-header">
            <b>
              {state.searchInput !== "" 
              ? "Search result for " + state.searchInput
              : "All items"}
            </b>
          </div>
        </div>
        <FoodGrid foodList={products} />
      </div>
    </>
  );
};

export default SearchPage;