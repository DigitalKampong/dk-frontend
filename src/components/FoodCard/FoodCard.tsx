import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Food from '../../types/Food';
import styles from './FoodCard.module.css';

interface Props {
  food: Food;
}

const FoodCard: React.FunctionComponent<Props> = (props: Props) => {
  const { food } = props;

  return (
    <Card>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
      <Card.Content>
        <div className={styles['name-label']}>{food.name}</div>
        <div className={styles['price-label']}>${food.price ? food.price.toFixed(2) : "N/A"}</div>
      </Card.Content>
    </Card>
  );
};

export default FoodCard;