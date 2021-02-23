import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import styles from './FeaturedStallCard.module.scss';

interface Props {
  stall: Stall;
}

const FeaturedStallCard: React.FunctionComponent<Props> = (props: Props) => {
  const { stall } = props;
  return (
    <Link
      className={styles.stallCardContainer}
      to={{
        pathname: `/stalls/${stall.id}`,
      }}
    >
      <div className={styles.stallCard} style={{ backgroundImage: `url(${stall.Images[0] ? stall.Images[0].downloadUrl : null})` }}>
        <div className={styles.cardContent}>
          <div className={styles.stallName}>{stall.name}</div>
          <div>
            <Rating icon="star" defaultRating={Math.floor(stall.rating)} maxRating={5} disabled />
            <span>({stall.rating ? stall.rating : 'N/A'})</span>
          </div>
          <div className={styles.stallCenter}>
            <span>{stall.HawkerCentre ? stall.HawkerCentre.name : undefined}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedStallCard;
