import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import styles from './StallCardMobile.module.scss';

interface Props {
  stall: Stall;
}

const StallCardMobile: React.FunctionComponent<Props> = (props: Props) => {
  const { stall } = props;
  return (
    <>
      <div className={styles['line']}></div>
      <div className={styles['wrapper']}>
        <Link
          style={{ textDecoration: 'none', color: 'black', width: '100%' }}
          to={{
            pathname: `/stalls/${stall.id}`,
          }}
        >
          <div className={styles['stall-div']}>
            <div className={styles['stall-image-div']}>
              <img src={stall.Images[0].downloadUrl} alt="" />
            </div>
            <div className={styles['stall-info-div']}>
              <div className={styles['stall-name']}>{stall.name}</div>
              <Rating icon="star" defaultRating={Math.floor(stall.rating)} maxRating={5} disabled />
              <span>({stall.rating ? stall.rating : 'N/A'})</span>
              <div className={styles['stall-hawker']}>
                <span>{stall.HawkerCentre ? stall.HawkerCentre.name : undefined}</span>
              </div>
            </div>
          </div>
        </Link>
        <div className={styles['stall-map']}>
          <div className={styles['map-btn']}>View Map</div>
        </div>
      </div>
    </>
  );
};

export default StallCardMobile;
