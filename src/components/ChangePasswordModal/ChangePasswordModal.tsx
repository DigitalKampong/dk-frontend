import React, { useState } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';
import { updateUser } from '../../services/user';
import User from '../../types/User';
import styles from './ChangePasswordModal.module.scss';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  currentUser: User;
};

const ChangePasswordModal = (props: Props) => {
  const { isOpen, setModalOpen, currentUser } = props;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const handleChangePassword = () => {
    if (confirmPassword !== password) {
      setErrorModalOpen(true);
      setError('Change password failed. Two passwords are different.');
      return;
    }
    updateUser({ data: { username: currentUser.username, password: password } })
      .then((res) => {
        setSuccessModalOpen(true);
      })
      .catch((error) => {
        setErrorModalOpen(true);
        setError('Change password failed. New password is not valid.');
      });
  };

  return (
    <Modal
      className={styles['modal']}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles['modal-header']}>Change Password</Modal.Header>
      <Modal.Content className={styles['modal-content']}>
        <Input
          className={styles['input-field']}
          placeholder="New password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
        />
        <Input
          className={styles['input-field']}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          type="password"
        />
        <Button className={styles['signup-button']} onClick={handleChangePassword}>
          Confirm
        </Button>
      </Modal.Content>
      <Modal
        basic
        className={styles['login-modal']}
        onClose={() => setErrorModalOpen(false)}
        onOpen={() => setErrorModalOpen(true)}
        open={errorModalOpen}
        content={error}
        actions={['Ok']}
      />
      <Modal
        basic
        className={styles['login-modal']}
        onClose={() => {
          setSuccessModalOpen(false);
          setModalOpen(false);
        }}
        onOpen={() => setSuccessModalOpen(true)}
        open={successModalOpen}
        content={'Change password succeed!'}
        actions={['Ok']}
      />
    </Modal>
  );
};

export default ChangePasswordModal;
