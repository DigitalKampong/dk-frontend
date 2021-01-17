import React, { useEffect, useState } from 'react';
import { getAllHawkers } from '../../services/hawker';
import styles from './HawkersPage.module.css';
import {Button } from 'semantic-ui-react';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import HawkerCentre from '../../types/HawkerCentre';

const HawkerLocationPage: React.FunctionComponent = () => {

  const[hawkers, setHawkers] = useState<HawkerCentre[]>([]);
  const[filter, setFilter] = useState("");
  const [isFiltered,changeFilteredStatus] = useState(0);
  const[filteredHawkers, setFilteredHawkers] = useState<HawkerCentre[]>([]);
  const incrementClick = () => changeFilteredStatus(isFiltered + 1);

  useEffect(() => {
    if(filter.length === 0 && !isFiltered){
      getAllHawkers().then(response => {
        setHawkers(response.data);
        console.log(response.data);
      })} else{
        if(isFiltered === 1){
          setFilteredHawkers(filterLocation(filter));
          console.log(isFiltered);
        }else{
          getAllHawkers().then(response => {
            setHawkers(response.data);
            console.log(isFiltered);
          })
        }
      }
  },[filter,isFiltered]);

  function filterLocation(location : string){
    const result = hawkers.filter(hawker => { 
      return hawker.Region.name === location;
    })
    return result;
  } 

 
  return(
    <>
      <SearchHeader></SearchHeader>
      <div className={styles["site-content"]}>
        <div className={styles["location-filters-row"]}>
          <div className={styles["site-content-header"]}>
             <b> All Hawker Centres </b> 
          </div>
          <div className = {styles['filter-buttons']}>
            <Button basic onClick = {() => setFilter("East")}> East </Button>
            <Button basic  onClick = {() => setFilter("West") }> West </Button>
            <Button basic  onClick = {() => setFilter("Central")}> Central </Button>
            <Button basic  onClick = {() => setFilter("NorthEast")}> NorthEast </Button>
            <Button basic  onClick = {() => setFilter("South")}> South</Button>
          </div>
        </div>
        <div className={styles["hawker-list"]}>
           <HawkerGrid hawkerList={filter !== "" && isFiltered === 1 ? filteredHawkers :hawkers} />
        </div>
      </div>
    </>

  )
}

export default HawkerLocationPage
