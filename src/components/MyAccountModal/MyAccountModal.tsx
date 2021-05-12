import React, { useCallback, useEffect, useState } from 'react';
import styles from './MyAccountModal.module.scss';
import { Button, Modal } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CURRENT_USER, RootState } from '../../store/types';
import { getUserByEmail } from '../../services/user';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';
import User from '../../types/User';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const MyAccountModal = (props: Props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [retrievedUser, setRetrievedUser] = useState<User>();
  const { setModalOpen } = props;
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  useEffect(() => {
    currentUser?.email &&
      getUserByEmail(currentUser?.email).then((res) => {
        setRetrievedUser(res.data);
      });
  }, [currentUser]);
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('authToken');
    dispatch({ type: REMOVE_CURRENT_USER });
    setModalOpen(false);
  }, [setModalOpen, dispatch]);

  return (
    <Modal onClose={() => setModalOpen(false)} onOpen={() => setModalOpen(true)} open={props.isOpen} closeIcon>
      <Modal.Header>
        <div className={styles['modal-header']}>My account</div>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description className={styles['content']}>
          <div className={styles['content-header']}>
            <b>Email</b>
          </div>
          <div>{currentUser?.email}</div>
        </Modal.Description>
        <Modal.Description className={styles['content']}>
          <div className={styles['content-header']}>
            <b>Username</b>
          </div>
          <div>{retrievedUser?.username}</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          className={styles['button']}
          color="black"
          onClick={() => {
            setChangePasswordModalOpen(true);
          }}
        >
          Change password
        </Button>
        <Button className={styles['button']} color="orange" onClick={handleLogOut}>
          Log out
        </Button>
      </Modal.Actions>
      {retrievedUser && (
        <ChangePasswordModal isOpen={changePasswordModalOpen} setModalOpen={setChangePasswordModalOpen} currentUser={retrievedUser} />
      )}
    </Modal>
  );
};

export default MyAccountModal;
