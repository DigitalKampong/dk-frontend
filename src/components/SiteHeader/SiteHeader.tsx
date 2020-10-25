import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../../store/actions';
import { Button, Grid, Input } from 'semantic-ui-react';
import { createProduct, deleteProduct } from '../../services/product';
import './SiteHeader.css';
import { AddCount } from '../../store/types';
import { RootState } from '../../store/reducers';

const SiteHeader: React.FunctionComponent = () => {

  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();

  const testData = {
    data: {
      name: "TestingData123",
      stallId: 1,
    }
  };

  const actionButton = () => {
    console.log(count);
    dispatch(addCount(5));
  }
  
  const addButton = () => {
    createProduct(testData).then(response => {
      console.log(response);
    })
  }

  const deleteButton = () => {
    deleteProduct(4).then(response => {
      console.log(response);
    })
  }

  return (
    <>
      <div className="site-header">
        <Grid>
          <Grid.Row className="header-button-row">
            <Grid.Column>
              <span className="header-button-group">
                <Button basic onClick={actionButton}>Test Redux</Button>
                <Button basic onClick={deleteButton}>Delete a product</Button>
                <Button basic onClick={addButton}>Add a product</Button>
                <Button basic>Kampong Centre</Button>
                <Button className="sign-in-button">Sign in</Button>
              </span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <div className="digital-kampong-icon">Digital<br/>Kampong</div>
            </Grid.Column>
            <Grid.Column width={12}>
              <Input fluid icon='search' placeholder='Search...' />
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="site-header-filler"></div>
    </>
  );
};

export default SiteHeader;