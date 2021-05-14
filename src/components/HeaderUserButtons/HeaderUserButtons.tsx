import React, { useCallback, useEffect, useState } from 'react';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import styles from './HeaderUserButtons.module.scss';
import { Button } from 'semantic-ui-react';
import { getLoggedInUser } from '../../services/user';
import MyAccountModal from '../MyAccountModal/MyAccountModal';
import FavouriteStallModal from '../FavouriteStallModal/FavouriteStallModal'
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CURRENT_USER, RootState, UPDATE_CURRENT_USER } from '../../store/types';
import isMobile from '../../mobile';

interface Props {
  isMainHeader: boolean;
}

const HeaderUserButtons = (props: Props) => {
  const [isLogInModalOpen, setLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isMyAccountModalOpen, setMyAccountModalOpen] = useState(false);
  const[isFavouriteStallModalOpen, setFavouriteStallModalOpen] = useState(false);
  const userIsLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = getLoggedInUser();
    if (currentUser) {
      dispatch({ type: UPDATE_CURRENT_USER, payload: currentUser });
    } else {
      dispatch({ type: REMOVE_CURRENT_USER });
    }
  }, [dispatch]);

  const handleSignUpAction = useCallback(() => {
    setLogInModalOpen(false);
    setSignUpModalOpen(true);
  }, []);

  return (
    <>
      {!userIsLoggedIn && (
        <>
          <Button
            basic={props.isMainHeader && !isMobile() ? undefined : true}
            className={styles['header-button']}
            onClick={() => setSignUpModalOpen(true)}
          >
            Sign up
          </Button>
          <Button color="orange" className={styles['header-button-primary']} onClick={() => setLogInModalOpen(true)}>
            Log in
          </Button>
        </>
      )}
      {userIsLoggedIn && (
        <>
          <Button
             basic={props.isMainHeader && !isMobile() ? undefined : true}
             className={styles['header-button']}
             onClick={() => setFavouriteStallModalOpen(true)}
          >
             Favourite
          </Button>
          <Button
            basic={props.isMainHeader && !isMobile() ? undefined : true}
            className={styles['header-button']}
            onClick={() => setMyAccountModalOpen(true)}
          >
            My account
          </Button>
        </>
      )}
      <LogInModal isOpen={isLogInModalOpen} setModalOpen={setLogInModalOpen} handleSignUpAction={handleSignUpAction} />
      <SignUpModal isOpen={isSignUpModalOpen} setModalOpen={setSignUpModalOpen} />
      <MyAccountModal isOpen={isMyAccountModalOpen} setModalOpen={setMyAccountModalOpen} />
      <FavouriteStallModal isOpen={isFavouriteStallModalOpen} setModalOpen = {setFavouriteStallModalOpen} />
    </>
  );
};

export default HeaderUserButtons;
