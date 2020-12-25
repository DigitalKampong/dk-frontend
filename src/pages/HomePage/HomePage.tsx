import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import './HomePage.css';
import {Link} from 'react-router-dom';
import { getAllStalls } from '../../services/stall';
import StallGrid from '../../components/StallGrid/StallGrid';

const HomePage: React.FunctionComponent = () => {
  
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    getAllStalls().then(response => {
      setStalls(response.data)
    })
  }, [])

  return (
    <>
      <SiteHeader searchInput=""></SiteHeader>
      <div className="site-content">
        <div className="section-header-row">
          <div className="section-header"><b>Featured</b> merchants</div>
          <div className="section-header-button">View more</div>
        </div>
        <StallGrid stallList={stalls} />
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
          <Link to= "/hawkers">
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