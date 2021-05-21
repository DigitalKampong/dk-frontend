import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Rating } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import styles from './StallCard.module.scss';
import { placeholderImg } from '../../images/image_modules';

interface Props {
  stall: Stall;
}

const StallCard: React.FunctionComponent<Props> = (props: Props) => {
  const { stall } = props;
  return (
    <Link
      to={{
        pathname: `/stalls/${stall.id}`,
      }}
    >
      <Card>
        <img src={stall.Images[0] ? stall.Images[0].downloadUrl : placeholderImg} className={styles['img-stall']} />
        <Card.Content>
          <Card.Header>{stall.name}</Card.Header>
          <Card.Meta>
            <Rating icon="star" defaultRating={Math.floor(stall.rating)} maxRating={5} disabled />
            <span>({stall.rating ? stall.rating : 'N/A'})</span>
          </Card.Meta>
          <Card.Meta>
            <span>{stall.HawkerCentre ? stall.HawkerCentre.name : undefined}</span>
            <span className={styles['view-map-link']}>View Map</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default StallCard;

/*
        <Image src={stall.Images[0] ? stall.Images[0].downloadUrl : placeholderImg} centered wrapped ui={false} className={styles['img-size']} />
*/
