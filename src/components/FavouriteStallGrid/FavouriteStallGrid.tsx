import React from 'react';
import Favourite from '../../types/Favourite';
import { Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './FavouriteStallGrid.module.scss';

interface Props {
  favouriteList: Favourite[];
}

const FavouriteStallGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { favouriteList } = props;
  return (
    <>
      <div>
        <List>
          {favouriteList.map((favourite) => {
            return (
              <List.Item key={favourite.stallId}>
                <Link to={{ pathname: `/stalls/${favourite.stallId}` }}>
                  <Button basic className={styles['buttons']}>
                    <div className={styles['content']}>
                      <div className={styles['stall-name']}> {favourite.Stall.name} </div>
                      <div className={styles['stall-description']}> {favourite.Stall.description}</div>
                    </div>
                  </Button>
                </Link>
              </List.Item>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default FavouriteStallGrid;
