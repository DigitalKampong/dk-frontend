import React, { useEffect, useState } from 'react';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../../services/product';
import './HomePage.css';
import {Link} from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts().then(response => {
      setProducts(response.data);
    });
  } ,[]);

  return (
    <>
      <SiteHeader></SiteHeader>
      <div className="site-content">
        <div className="section-header-row">
          <div className="section-header"><b>Featured</b> merchants</div>
          <div className="section-header-button">View more</div>
        </div>
        <FoodGrid foodList={products} />

        <div className="section-header-row">
          <div className="section-header"><b>Explore</b> by Categories</div>
          <div className="section-header-button">View more</div>
        </div>
        <div className="category-grid">
          <div className="category-grid-cell">
            <div className="category-grid-label">Chinese</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Malay</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Indian</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Western</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Japanese</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Korean</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">SEA</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Dessert</div>
          </div>
        </div>
        <div className="section-header-row">
          <div className="section-header"><b>Explore</b> by Locations</div>
        </div>
        <div className="location-grid">
          <div className="category-grid-cell">
            <div className="category-grid-label">East</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">West</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">North</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">North-East</div>
          </div>
          <div className="category-grid-cell">
            <div className="category-grid-label">Central</div>
          </div>
        </div>
        <div className="section-header-row">
          <div className="section-header"><b>Explore</b> by Directories</div>
        </div>
        <div className="directory-grid">
          <div className="category-grid-cell">
            <div className="category-grid-label">View all stalls</div>
          </div>
          <Link to= "/hawker">
            <div className="category-grid-cell">
              <div className="category-grid-label">View all Hawker centres</div>
           </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;