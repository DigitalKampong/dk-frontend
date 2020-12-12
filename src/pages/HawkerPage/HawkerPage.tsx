import { SIGBREAK } from 'constants';
import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../../services/product';
import './HawkerPage.css';
import HawkerLocationButton from '../../components/HawkerLocationButton';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';


const HawkerPage: React.FunctionComponent = () => {
    const[products,setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts().then(response => {
            setProducts(response.data);
        });
    },[]);

    return (
        <>
            <SiteHeader></SiteHeader>
            <div className = "hawker-content">
                <div className = "hawker-header-row">
                    <div className ="hawker-header"> <b> Directory </b> of Hawker Centres: </div>
                 </div>
                 <div className = "map">
                     <div className = "insert-map">
                         map 
                     </div>
                 </div>
                 <div className = "location-filters-row">
                    <div className = "location-filters-header">Hawker centers
                    </div> 
                    <div> <HawkerLocationButton/> </div>
                    <div className = "hawker-list">
                    <HawkerGrid hawkerList = {products}/>
                    </div>
                 </div>

            </div>




         </>
    )
}


export default HawkerPage;