import React from 'react';
import { Grid } from 'semantic-ui-react';
import Stall from '../../types/Stall';
import StallCard from '../StallCard/StallCard';
import './StallGrid.css';

interface Props {
  stallList: Stall[];
}

const StallGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { stallList } = props;

  return (
    <Grid stackable columns={5} className="stall-grid">
      {stallList.map(x => {
        return (
          <Grid.Column key={x.id}>
            <StallCard stall={x}/>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default StallGrid;