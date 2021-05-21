import React from 'react';
import { Card } from 'semantic-ui-react';
import Food from '../../types/Food';
import styles from './FoodCard.module.scss';
import { placeholderImg } from '../../images/image_modules';

interface Props {
  food: Food;
}

const FoodCard: React.FunctionComponent<Props> = (props: Props) => {
  const { food } = props;

  return (
    <Card className={styles.foodCard}>
      <img src={food.Images[0] ? food.Images[0].downloadUrl : placeholderImg} className={styles['img-food']} />
      <Card.Content className={styles.cardContent}>
        <div className={styles['name-label']}>{food.name}</div>
        <div className={styles['price-label']}>${food.price ? food.price.toFixed(2) : 'N/A'}</div>
      </Card.Content>
    </Card>
  );
};

export default FoodCard;

/*
      <Image src={food.Images[0] ? food.Images[0].downloadUrl : placeholderImg} wrapped ui={false} />
*/
