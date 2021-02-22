import React from 'react';
import Food from '../../types/Food';
import FoodCard from '../FoodCard/FoodCard';
import styles from './FoodGrid.module.scss';

interface Props {
  foodList: Food[];
}

const FoodGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { foodList } = props;

  return (
    <div className={styles['food-grid']}>
      {foodList.map((x) => {
        return (
          <div key={x.name}>
            <FoodCard food={x} />
          </div>
        );
      })}
    </div>
  );
};

export default FoodGrid;
