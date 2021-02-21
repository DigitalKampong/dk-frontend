import React from 'react';
import Stall from '../../types/Stall';
import FeaturedStallCard from '../FeaturedStallCard/FeaturedStallCard';
import styles from './FeaturedStallGrid.module.scss';

interface Props {
  stallList: Stall[];
}

const FeaturedStallGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { stallList } = props;

  return (
    <div className={styles['stall-grid']}>
      {stallList.map((x) => {
        return <FeaturedStallCard key={x.id} stall={x} />;
      })}
    </div>
  );
};

export default FeaturedStallGrid;
