import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Input, Modal } from 'semantic-ui-react';
import { loginUser } from '../../services/user';
import styles from './LogInModal.module.css';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  handleSignUpAction: () => void;
};

const LogInModal = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);
  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);
  const handleLogInClick = useCallback(() => {
    loginUser({ data: {
      email: username,
      password: password,
    } }).then((response) => {
      localStorage.setItem('username', username);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('authToken', response.data.token);
      props.setModalOpen(false);
    });
  }, [username, password, props]);
  const handleSignUpClick = useCallback(() => {
    props.handleSignUpAction();
  }, [props]);

  return (
    <Modal
      className={styles["modal"]}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={props.isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles["modal-header"]}>Log in to Digital Kampung</Modal.Header>
      <Modal.Content className={styles["modal-content"]}>
        <Input className={styles["input-field"]} placeholder="Email" value={username} onChange={handleUsernameChange} />
        <Input className={styles["input-field"]} placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        <Button color="orange" className={styles["login-button"]} onClick={handleLogInClick}>Log in</Button>
        <div className={styles["modal-row"]}>
          <Checkbox className={styles["checkbox"]} label='Remember me' />
          <div className={styles["link-text"]}>
            Forgot password?
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions className={styles["modal-footer"]}>
        <Button color="blue" className={styles["signup-button"]} onClick={handleSignUpClick}>Create new account</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LogInModal;