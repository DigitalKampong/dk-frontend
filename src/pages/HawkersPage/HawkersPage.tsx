import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllHawkers } from '../../services/hawker';
import './HawkersPage.css';

const HawkerLocationPage: React.FunctionComponent = () => {
  const[hawkers, setHawkers] = useState([]);

  useEffect(() => {
    getAllHawkers().then( response => {
      setHawkers(response.data);
    });
  },[]);

  return(
    <>
    <SiteHeader searchInput= ""></SiteHeader>
    <div className = "site-content">
      <div className = "site-content-header">
        <b> Directory </b> of Hawker Centres:
      </div>
      <div className = "map-content"></div>
      <div className = "location-filters-row">
        <div className = "location-filters-header"> Hawker Centers </div>

      </div>
    </div>
    </>

  )
}

export default HawkerLocationPage