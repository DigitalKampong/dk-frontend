import React from 'react';
import { Grid } from 'semantic-ui-react';
import Food from '../../types/Food';
import FoodCard from '../FoodCard/FoodCard';
import './FoodGrid.css';

interface Props {
  foodList: Food[];
}

const FoodGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { foodList } = props;

  return (
    <Grid stackable columns={5} className="food-grid">
      {foodList.map(x => {
        return (
          <Grid.Column key={x.id}>
            <FoodCard food={x}/>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default FoodGrid;