import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Food from '../../types/Food';
import styles from './FoodCard.module.scss';

interface Props {
  food: Food;
}

const FoodCard: React.FunctionComponent<Props> = (props: Props) => {
  const { food } = props;

  return (
    <Card className={styles.foodCard}>
      <Image src={food.Images[0].downloadUrl} wrapped ui={false} />
      <Card.Content className={styles.cardContent}>
        <div className={styles['name-label']}>{food.name}</div>
        <div className={styles['price-label']}>${food.price ? food.price.toFixed(2) : 'N/A'}</div>
      </Card.Content>
    </Card>
  );
};

export default FoodCard;
