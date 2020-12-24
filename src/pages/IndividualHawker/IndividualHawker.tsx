import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import { getHawker } from '../../services/hawker';
import HawkerCentre from '../../types/HawkerCentre';
import './IndividualHawker.css';

interface HawkerProps {
  selectedHawker: number;
}

const IndividualHawker : React.FunctionComponent = () => {

  const hawkerObject = {} as HawkerCentre;
  const location = useLocation();
  const state = location.state as HawkerProps;
  const [hawkerData, setHawkerData] = useState(hawkerObject);

  useEffect(() => {
    getHawker(state.selectedHawker).then(response => {
      setHawkerData(response.data);
    })
  }, [state.selectedHawker]);

  return (
    <>
    <SiteHeader searchInput = ""></SiteHeader>
    <div className = 'site-content'>
      <div className = "hawker-item">
        <Item.Group>
          <Item>
            <Item.Image size = 'large' src = "https://react.semantic-ui.com/images/wireframe/image.png">
            </Item.Image>
            <Item.Content className = 'hawker-content'>
              <Item.Header className = 'hawker-header'>
              </Item.Header>
              <Item.Meta>
                {hawkerData.name}<br/>
                {hawkerData.address}
              </Item.Meta>
              <Item.Description className = 'hawker-description'>
                Getting there:
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    </div>
    </>

  )
};
export default IndividualHawker;