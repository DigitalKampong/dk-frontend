import React, { useCallback, useEffect, useState } from 'react';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import styles from './HeaderUserButtons.module.css';
import { Button } from 'semantic-ui-react';
import { isLoggedIn } from '../../services/user';

interface Props {
  isMainHeader: boolean;
}

const HeaderUserButtons = (props: Props) => {  
  const [isLogInModalOpen, setLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [userIsLoggedIn, setIsLoggedIn] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoggedIn(isLoggedIn());
  });

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  }, []);

  const handleSignUpAction = useCallback(() => {
    setLogInModalOpen(false);
    setSignUpModalOpen(true);
  }, []);

  return (
    <>
      {!userIsLoggedIn && (
        <>
          <Button basic={props.isMainHeader ? undefined : true}
            className={styles["header-button"]} 
            onClick={() => setSignUpModalOpen(true)}
          >Sign up</Button>
          <Button
            className={styles["header-button-primary"]} 
            onClick={() => setLogInModalOpen(true)}
          >Log in</Button>
        </>
      )}
      {userIsLoggedIn && (
        <>
          <Button basic={props.isMainHeader ? undefined : true}
            className={styles["header-button"]}
            onClick={handleLogOut}
          >Log out</Button>
        </>
      )}
      <LogInModal isOpen={isLogInModalOpen} setModalOpen={setLogInModalOpen} handleSignUpAction={handleSignUpAction} />
      <SignUpModal isOpen={isSignUpModalOpen} setModalOpen={setSignUpModalOpen} />
    </>
  );
};

export default HeaderUserButtons;