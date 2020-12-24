import React from 'react';
import Hawker from '../../types/HawkerCentre';
import { Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props{
    hawkerList: Hawker[];
}

const HawkerGrid : React.FunctionComponent<Props> = (props : Props) => {
  const{ hawkerList } = props;
  return(
    <div>
      <List divided relaxed>
        {hawkerList.map( hawker => {
          return (
            <List.Item key={hawker.id}>
              <Link to={{
                pathname: `/hawkers/${hawker.name}`,
                state: {
                  selectedHawker: hawker.id
                }
              }}>
                <Button  basic className ='hawker-button'> 
                  {hawker.name}
                </Button>
              </Link>
            </List.Item>
          )
      })}
      </List>
    </div>
    )
}

export default HawkerGrid;