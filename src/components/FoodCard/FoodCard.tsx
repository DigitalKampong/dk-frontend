import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Food from '../../types/Food';
import './FoodCard.css';

interface Props {
  food: Food;
}

const FoodCard: React.FunctionComponent<Props> = (props: Props) => {
  const { food } = props;

  return (
    <Card>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{food.name}</Card.Header>
        <Card.Meta>
          <span>{food.stallId}</span>
        </Card.Meta>
        <Card.Meta>
          800m
        </Card.Meta>
        <Card.Header className='price-tag'>${food.price.toFixed(2)}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name='star'/>
        4.5/5.0 - 182 ratings
      </Card.Content>
    </Card>
  );
};

export default FoodCard;