import React from 'react';
import { Image,Item } from 'semantic-ui-react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import './IndividualHawker.css';

const IndividualHawker : React.FunctionComponent = () => {
  return(
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
             Airport Road Food Centre
            </Item.Header>
            <Item.Meta>
              51 Old Airport Rd, Singapore 390051
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