import React, { useEffect, useState } from 'react';
import { getFavourite } from '../../services/favourite';
import styles from './FavouriteStallModal.module.scss';
import { Modal } from 'semantic-ui-react';
import FavouriteStallGrid from '../FavouriteStallGrid/FavouriteStallGrid';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const FavouriteStallModal = (props: Props) => {
  const { setModalOpen } = props;
  const [favStall, setFavStall] = useState([]);
  useEffect(() => {
    getFavourite().then((response) => {
      setFavStall(response.data);
    });
  }, [favStall]);
  var stallArray = [];
  favStall.forEach((data: Object) => {
    stallArray.push(Object.values(data)[5]);
  });

  return (
    <Modal onClose={() => setModalOpen(false)} onOpen={() => setModalOpen(true)} open={props.isOpen} closeIcon>
      <Modal.Header className={styles['modal-header']} style={{ backgroundColor: '#ffc448' }}>
        {' '}
        Favourite Stalls{' '}
      </Modal.Header>
      <div className={styles['content']}>
        <FavouriteStallGrid favouriteList={favStall}> </FavouriteStallGrid>
      </div>
    </Modal>
  );
};
export default FavouriteStallModal;
