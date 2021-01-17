import React, { useCallback, useEffect, useState } from 'react';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import styles from './HeaderUserButtons.module.css';
import { Button } from 'semantic-ui-react';
import { isLoggedIn } from '../../services/user';
import MyAccountModal from '../MyAccountModal/MyAccountModal';

interface Props {
  isMainHeader: boolean;
}

const HeaderUserButtons = (props: Props) => {
  const [isLogInModalOpen, setLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isMyAccountModalOpen, setMyAccountModalOpen] = useState(false);
  const [userIsLoggedIn, setIsLoggedIn] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoggedIn(isLoggedIn());
  });

  const handleSignUpAction = useCallback(() => {
    setLogInModalOpen(false);
    setSignUpModalOpen(true);
  }, []);

  return (
    <>
      {!userIsLoggedIn && (
        <>
          <Button basic={props.isMainHeader ? undefined : true} className={styles['header-button']} onClick={() => setSignUpModalOpen(true)}>
            Sign up
          </Button>
          <Button color="orange" className={styles['header-button-primary']} onClick={() => setLogInModalOpen(true)}>
            Log in
          </Button>
        </>
      )}
      {userIsLoggedIn && (
        <>
          <Button basic={props.isMainHeader ? undefined : true} className={styles['header-button']} onClick={() => setMyAccountModalOpen(true)}>
            My account
          </Button>
        </>
      )}
      <LogInModal isOpen={isLogInModalOpen} setModalOpen={setLogInModalOpen} handleSignUpAction={handleSignUpAction} />
      <SignUpModal isOpen={isSignUpModalOpen} setModalOpen={setSignUpModalOpen} />
      <MyAccountModal isOpen={isMyAccountModalOpen} setModalOpen={setMyAccountModalOpen} />
    </>
  );
};

export default HeaderUserButtons;
