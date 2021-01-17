import React, { useCallback } from 'react';
import styles from './MyAccountModal.module.css';
import { Button, Modal } from 'semantic-ui-react';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const MyAccountModal = (props: Props) => {
  const username = localStorage.getItem('username');
  const { setModalOpen } = props;
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('authToken');
    setModalOpen(false);
  }, [setModalOpen]);

  return (
    <Modal onClose={() => setModalOpen(false)} onOpen={() => setModalOpen(true)} open={props.isOpen} closeIcon>
      <Modal.Header>
        <div className={styles['modal-header']}>My account</div>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description className={styles['content']}>
          <div className={styles['content-header']}>
            <b>Username</b>
          </div>
          <div>{username}</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button basic className={styles['button']} color="black">
          Change password
        </Button>
        <Button className={styles['button']} color="orange" onClick={handleLogOut}>
          Log out
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default MyAccountModal;
