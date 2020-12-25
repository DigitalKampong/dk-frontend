import React from 'react';
import Hawker from '../../types/HawkerCentre';
import { Button, List } from 'semantic-ui-react';

interface Props{
    hawkerList: Hawker[];
}

const HawkerGrid : React.FunctionComponent<Props> = (props : Props) => {
  const{hawkerList} = props;
  return(
    <div>
      {hawkerList.map( x => {
        return(
          <List divided relaxed>
            <List.Item>
              <Button  basic className ='hawker-button'> 
                 Airport Road Food Centre
                 23 Changi Road, 188999
              </Button>
            </List.Item>
          </List>
        )
      })}
    </div>
    )
}

export default HawkerGrid;