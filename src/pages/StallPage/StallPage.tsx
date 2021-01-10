import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, GridColumn, Rating } from 'semantic-ui-react';
import FoodGrid from '../../components/FoodGrid/FoodGrid';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getStall } from '../../services/stall';
import Stall from '../../types/Stall';
import styles from './StallPage.module.css';

const StallPage: React.FunctionComponent = () => {
  const params = useParams<{ id: string }>();
  const [stall, setStall] = useState<Stall>();

  useEffect(() => {
    getStall(parseInt(params.id)).then(response => {
      setStall(response.data);
    });
  }, [params.id]); 

  return (
    <>
      <SearchHeader></SearchHeader>
      <div className={styles["site-content"]}>
        <Grid>
          <Grid.Column width={6}>
            <div className={styles["stall-image"]}></div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className={styles["stall-title"]}>
              {stall?.name}
            </div>
            <div className={styles["category-container"]}>
              <div className={styles["category-tag"]}>Chinese</div>
              <div className={styles["category-tag"]}>Singapore</div>
              <div className={styles["category-tag"]}>West</div>
              <div className={styles["category-tag"]}>Halal</div>
              <div className={styles["category-tag"]}>Traditional</div>
            </div>
            <div className={styles["location-primary"]}>
              Clementi Food Centre
            </div>
            <div className={styles["location-secondary"]}>
              26 Clementi Road, Singapore 101010
            </div>
            <div className={styles["ratings-container"]}>
              <Rating 
                icon='star' 
                size='massive' 
                defaultRating={stall ? Math.floor(stall.rating) : 0} 
                maxRating={5} 
                disabled
                className={styles["ratings-component"]}
              />
              <div className={styles["ratings-count"]}>2250 ratings</div>
            </div>
            <div className={styles["price-label"]}>
              $2.50/pax
            </div>
            <div className={styles["price-append"]}>
              +$0.30 for takeaway
            </div>
            <div className={styles["opening-hours-title"]}>
              Opening hours
            </div>
            <div className={styles["opening-hours-label"]}>
              MON - SAT : 0900 - 2300<br />
              SUN, PH : 1200 - 2100
            </div>
            <div className={styles["stall-button-container"]}>
              <Button className={styles["button-primary"]}>Favourite</Button>
              <Button basic className={styles["button-secondary"]}>Getting There</Button>
            </div>
          </Grid.Column>
          <GridColumn width={4}>
          </GridColumn>
        </Grid>
        <div className={styles["separator"]}></div>
        <div className={styles["product-section-header"]}>Products</div>
        <FoodGrid foodList={stall ? stall?.Products : []} />
      </div>
    </>
  );
};

export default StallPage;