import React from 'react';
import Hawker from '../../types/HawkerCentre';
import { Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './HawkerGrid.module.css';

interface Props {
  hawkerList: Hawker[];
}

const HawkerGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { hawkerList } = props;
  return (
    <div className={styles['hawker-grid']}>
      <List divided relaxed>
        {hawkerList.map((hawker) => {
          return (
            <List.Item key={hawker.id}>
              <Link
                to={{
                  pathname: `/hawkers/${hawker.name}`,
                  state: {
                    selectedHawker: hawker.id,
                  },
                }}
              >
                <Button basic className={styles['hawker-button']}>
                  <div className={styles['hawker-content']}>
                    <div className={styles['hawker-name']}>{hawker.name}</div>
                    <div className={styles['hawker-address']}>{hawker.address}</div>
                  </div>
                </Button>
              </Link>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default HawkerGrid;
