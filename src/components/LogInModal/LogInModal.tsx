import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Input, Modal } from 'semantic-ui-react';
import { loginUser } from '../../services/user';
import { UPDATE_CURRENT_USER } from '../../store/types';
import styles from './LogInModal.module.css';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  handleSignUpAction: () => void;
};

const LogInModal = (props: Props) => {
  const dispatch = useDispatch();
  const { isOpen, setModalOpen, handleSignUpAction } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);
  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);
  const handleLogInClick = useCallback(() => {
    loginUser({
      data: {
        email: username,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem('username', username);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('authToken', response.data.token);
        dispatch({ type: UPDATE_CURRENT_USER, payload: { email: username } });
        setModalOpen(false);
      })
      .catch((error) => {
        setErrorModalOpen(true);
      });
  }, [username, password, setModalOpen, dispatch]);
  const handleSignUpClick = useCallback(() => {
    handleSignUpAction();
  }, [handleSignUpAction]);

  return (
    <Modal
      className={styles['modal']}
      onClose={() => props.setModalOpen(false)}
      onOpen={() => props.setModalOpen(true)}
      open={isOpen}
      closeIcon
      size="mini"
    >
      <Modal.Header className={styles['modal-header']}>Log in to Digital Kampung</Modal.Header>
      <Modal.Content className={styles['modal-content']}>
        <Input className={styles['input-field']} placeholder="Email" value={username} onChange={handleUsernameChange} />
        <Input className={styles['input-field']} placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        <Button color="orange" className={styles['login-button']} onClick={handleLogInClick}>
          Log in
        </Button>
        <div className={styles['modal-row']}>
          <Checkbox className={styles['checkbox']} label="Remember me" />
          <div className={styles['link-text']}>Forgot password?</div>
        </div>
      </Modal.Content>
      <Modal.Actions className={styles['modal-footer']}>
        <Button color="blue" className={styles['signup-button']} onClick={handleSignUpClick}>
          Create new account
        </Button>
      </Modal.Actions>
      <Modal
        basic
        className={styles['login-modal']}
        onClose={() => setErrorModalOpen(false)}
        onOpen={() => setErrorModalOpen(true)}
        open={errorModalOpen}
        content="Invalid credentials. Check your email / password and try again."
        actions={['Ok']}
      />
    </Modal>
  );
};

export default LogInModal;
