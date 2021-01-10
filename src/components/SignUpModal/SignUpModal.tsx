import React, { useCallback, useState } from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';
import { registerUser } from '../../services/user';
import styles from './SignUpModal.module.css';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
};

const SignUpModal = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);
  const handleSignUpClick = useCallback(() => {
    registerUser({ data: {
      email: username,
      password: password,
    } }).then((response) => {
      localStorage.setItem('username', username);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('authToken', response.data.token);
      props.setModalOpen(false);
    });
  }, [username, password, props]);

  return (
    <Modal
      className={styles["modal"]}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={props.isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles["modal-header"]}>Sign up to Digital Kampung</Modal.Header>
      <Modal.Content className={styles["modal-content"]}>
        <Input className={styles["input-field"]} placeholder="Email" value={username} onChange={handleUsernameChange} />
        <Input className={styles["input-field"]} placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        {/* <Input className={styles["input-field"]} placeholder="Mobile number or email" /> */}
        <Button className={styles["signup-button"]} onClick={handleSignUpClick} >Sign up</Button>
      </Modal.Content>
    </Modal>
  );
};

export default SignUpModal;