import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, GridColumn, Rating } from 'semantic-ui-react';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getStall } from '../../services/stall';
import Stall from '../../types/Stall';
import './StallPage.css';

const StallPage: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const [stall, setStall] = useState<Stall>();

  useEffect(() => {
    getStall(parseInt(params.id)).then(response => {
      console.log(response.data);
      setStall(response.data);
    });
  }, [params.id]); 

  return (
    <>
      <SiteHeader searchInput=''></SiteHeader>
      <div className="site-content">
        <Grid>
          <Grid.Column width={6}>
            <div className="stall-image"></div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="stall-title">
              {stall?.name}
            </div>
            <div className="category-container">
              <div className="category-tag">Chinese</div>
              <div className="category-tag">Singapore</div>
              <div className="category-tag">West</div>
              <div className="category-tag">Halal</div>
              <div className="category-tag">Traditional</div>
            </div>
            <div className="location-primary">
              Clementi Food Centre
            </div>
            <div className="location-secondary">
              26 Clementi Road, Singapore 101010
            </div>
            <div className="ratings-container">
              <Rating 
                icon='star' 
                size='massive' 
                defaultRating={stall ? Math.floor(stall.rating) : 0} 
                maxRating={5} 
                disabled
                className="ratings-component"
              />
              <div className="ratings-count">2250 ratings</div>
            </div>
            <div className="price-label">
              $2.50/pax
            </div>
            <div className="price-append">
              +$0.30 for takeaway
            </div>
            <div className="opening-hours-title">
              Opening hours
            </div>
            <div className="opening-hours-label">
              MON - SAT : 0900 - 2300<br />
              SUN, PH : 1200 - 2100
            </div>
            <div className="stall-button-container">
              <Button className="button-primary">Favourite</Button>
              <Button basic className="button-secondary">Getting There</Button>
            </div>
          </Grid.Column>
          <GridColumn width={4}>
          </GridColumn>
        </Grid>
        <div className="separator"></div>
        <div className="product-section-header">Products</div>
        <FoodGrid foodList={stall ? stall?.Products : []} />
      </div>
    </>
  );
};

export default StallPage;