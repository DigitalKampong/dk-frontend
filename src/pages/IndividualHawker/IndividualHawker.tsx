import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getHawker } from '../../services/hawker';
import HawkerCentre from '../../types/HawkerCentre';
import styles from './IndividualHawker.module.scss';
import StallGrid from '../../components/StallGrid/StallGrid';
import StallCardMobile from '../../components/StallCardMobile/StallCardMobile';
import isMobile from '../../mobile';

interface StateProps {
  selectedHawker: number;
}

const IndividualHawker: React.FunctionComponent = () => {
  const hawkerObject = {} as HawkerCentre;
  const location = useLocation();
  const state = location.state as StateProps;
  const [hawkerData, setHawkerData] = useState(hawkerObject);

  useEffect(() => {
    window.scrollTo(0, 0);
    getHawker(state.selectedHawker).then((response) => {
      setHawkerData(response.data);
    });
  }, [state.selectedHawker]);

  const onMapButtonClick = () => {
    window.open(`https://www.google.com.sg/maps/search/${hawkerData.lat},${hawkerData.lng}/`);
  };

  return (
    <>
      <SearchHeader toggleFilterNavBar={() => {}} isSearchPage={false} setQuery={() => {}}></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['hawker']}>
          <div className={styles['hawker-image-div']}>
            <Image
              className={styles['hawker-image-grid']}
              src={hawkerData.Images && hawkerData.Images[0] ? hawkerData.Images[0].downloadUrl : null}
              ui={false}
            />
          </div>
          <div className={styles['hawker-content-grid']}>
            <div className={styles['hawker-header-div']}>
              <div className={styles['hawker-header']}>{hawkerData.name}</div>
              {hawkerData?.isClosed && <div className={styles['hawker-closed']}>CLOSED</div>}
            </div>
            <div className={styles['hawker-address']}>{hawkerData.address}</div>
            <div className={styles['hawker-announcement']}>{!isMobile() ? hawkerData?.announcement : null}</div>
            <div className={styles['hawker-description']}>Getting there:</div>
            <div className={styles['hawker-transport']}>
              <p>Nearest Mrt: {hawkerData.mrt}</p>
              <p>Bus: {hawkerData.bus}</p>
            </div>
            {!isMobile() && (
              <div className={styles['direction-button']}>
                <Button basic className={styles['button']} onClick={onMapButtonClick}>
                  Open in Google Map
                </Button>
              </div>
            )}
            {isMobile() && (
              <div className={styles['direction-button']}>
                <Button basic className={styles['button']} onClick={onMapButtonClick}>
                  Google Map
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={styles['hawker-announcement']}>{isMobile() ? hawkerData?.announcement : null}</div>
        <div className={styles['separator']}></div>
        <div className={styles['stalls-header']}>Stalls</div>
        {!isMobile() && (
          <div className={styles['stalls']}>
            <StallGrid stallList={hawkerData.id ? hawkerData?.Stalls : []} />
          </div>
        )}
        {isMobile() && (
          <div className={styles['stalls']}>
            {hawkerData.Stalls &&
              hawkerData.Stalls.map((stall) => {
                return <StallCardMobile key={stall.id} stall={stall} hawkerCentreName={hawkerData.name} />;
              })}
          </div>
        )}
      </div>
    </>
  );
};
export default IndividualHawker;
