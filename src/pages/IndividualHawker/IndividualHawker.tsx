import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getHawker } from '../../services/hawker';
import HawkerCentre from '../../types/HawkerCentre';
import styles from './IndividualHawker.module.css';
import StallGrid from '../../components/StallGrid/StallGrid';

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

  return (
    <>
      <SearchHeader></SearchHeader>
      <div className={styles['site-content']}>
        <div className={styles['hawker-item']}>
          <Grid>
            <Grid.Column width={6}>
              <div className={styles['hawker-image']}></div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div className={styles['hawker-header']}>{hawkerData.name}</div>
              <div className={styles['hawker-address']}>{hawkerData.address}</div>
              <div className={styles['hawker-description']}>Getting there:</div>
              <div className={styles['hawker-transport']}>
                Nearest Mrt:
                <br />
                Bus:
              </div>
              <div className={styles['direction-button']}>
                <Button basic>Open in Google Map</Button>
              </div>
            </Grid.Column>
          </Grid>
          <div className={styles['stalls-header']}>Stalls</div>
          <StallGrid stallList={hawkerData.id ? hawkerData?.Stalls : []} />
        </div>
      </div>
    </>
  );
};
export default IndividualHawker;
