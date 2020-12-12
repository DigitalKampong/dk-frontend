import { SIGBREAK } from 'constants';
import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getAllProducts } from '../../services/product';
import './HawkerPage.css';
import HawkerGrid from '../../components/HawkerGrid/HawkerGrid';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


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
                    <div>
                        <Button basic> East </Button>
                    </div>
                    <div>
                        <Button basic> West </Button>
                    </div>
                    <div>
                        <Button basic> Central </Button>
                    </div>
                    <div>
                        <Button basic> North </Button>
                    </div>
                    <div>
                        <Button basic> NorthEast</Button>
                    </div>
                 </div>
                 <div className = "hawker-list">
                     <Link to = "/individualhawker">
                        <HawkerGrid hawkerList = {products}/>
                    </Link>
                 </div>

            </div>




         </>
    )
}


export default HawkerPage;