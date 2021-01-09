import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import { getHawker } from '../../services/hawker';
import HawkerCentre from '../../types/HawkerCentre';
import styles from './IndividualHawker.module.css';

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
          <Item.Group>
            <Item>
              <Item.Image size="large" src="https://react.semantic-ui.com/images/wireframe/image.png"></Item.Image>
              <Item.Content className={styles['hawker-content']}>
                <Item.Header className={styles['hawker-header']}></Item.Header>
                <Item.Meta>
                  {hawkerData.name}
                  <br />
                  {hawkerData.address}
                </Item.Meta>
                <Item.Description className={styles['hawker-description']}>Getting there:</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      </div>
    </>
  );
};
export default IndividualHawker;
