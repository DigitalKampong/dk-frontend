import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllHawkers } from '../../services/hawker';
import './HawkersPage.css';
import { Button } from 'semantic-ui-react'
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';

const HawkerLocationPage: React.FunctionComponent = () => {
  const[hawkers, setHawkers] = useState([]);

  useEffect(() => {
    getAllHawkers().then(response => {
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
        <Button basic> East </Button>
        <Button basic> West </Button>
        <Button basic> Central </Button>
        <Button basic> North </Button>
        <Button basic> NorthEast </Button>
      </div>
      <div className = "hawker-list">
        <HawkerGrid hawkerList={hawkers} />
      </div>
    </div>
    </>

  )
}

export default HawkerLocationPage