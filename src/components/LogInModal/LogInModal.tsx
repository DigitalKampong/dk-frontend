import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Input, Modal } from 'semantic-ui-react';
import { loginUser } from '../../services/user';
import { UPDATE_CURRENT_USER } from '../../store/types';
import styles from './LogInModal.module.scss';

type Props = {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  handleSignUpAction: () => void;
};

const LogInModal = (props: Props) => {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem('userEmail');
  const { isOpen, setModalOpen, handleSignUpAction } = props;
  const [email, setEmail] = useState(userEmail ? userEmail : '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const handleUsernameChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);
  const handleRememberMeChange = useCallback(() => {
    setRememberMe((prevState) => !prevState);
  }, []);
  const handleLogInClick = useCallback(() => {
    loginUser({
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem('username', email);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('authToken', response.data.token);
        if (rememberMe) {
          localStorage.setItem('userEmail', email);
        } else {
          localStorage.removeItem('userEmail');
        }
        dispatch({ type: UPDATE_CURRENT_USER, payload: { email: email } });
        setModalOpen(false);
      })
      .catch((error) => {
        setErrorModalOpen(true);
      });
  }, [email, rememberMe, password, setModalOpen, dispatch]);
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
        <Input className={styles['input-field']} placeholder="Email" value={email} onChange={handleUsernameChange} />
        <Input className={styles['input-field']} placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
        <Button color="orange" className={styles['login-button']} onClick={handleLogInClick}>
          Log in
        </Button>
        <div className={styles['modal-row']}>
          <Checkbox className={styles['checkbox']} label="Remember me" onChange={handleRememberMeChange} checked={rememberMe} />
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
