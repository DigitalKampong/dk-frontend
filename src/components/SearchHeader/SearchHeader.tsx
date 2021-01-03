import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import LogInModal from '../LogInModal/LogInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import styles from './SearchHeader.module.css';

const SearchHeader: React.FunctionComponent = () => {

  const history: any = useHistory();
  const [input, setInput] = useState<string>("");
  const [isLogInModalOpen, setLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      history.push('/search', {searchInput: input})
    }
  }

  return (
    <>
      <div className={styles["search-header"]}>
        <Link
          style={{textDecoration: 'none', color: "black"}}
          to={{
            pathname: "/"
          }}
        >
          <div className={styles["digital-kampong-icon"]}>Digital Kampong</div>
        </Link>
        <div className={styles["header-button-group"]}>
          <Button basic className={styles["header-button"]}>Kampong Centre</Button>
          <Button basic 
            className={styles["header-button"]} 
            onClick={() => setSignUpModalOpen(true)}
          >Sign up</Button>
          <Button 
            className={styles["header-button-primary"]} 
            onClick={() => setLogInModalOpen(true)}
          >Log in</Button>
        </div>
        <div className={styles["search-bar"]}>
          <Input 
            fluid 
            className={styles["search-bar-input"]} 
            placeholder='search for hawker centre / food' 
            value={input} 
            onChange={e => setInput(e.target.value)}
            onKeyPress={handleEnter}
          />
          <Link to={{
            pathname: "/search",
            state: {
              searchInput: input,
            }
          }}>
            <Button id="search" className={styles["search-button-primary"]}>Search</Button>
          </Link>
        </div>
      </div>
      <div className={styles["search-header-filler"]}></div>
      <LogInModal isOpen={isLogInModalOpen} setModalOpen={setLogInModalOpen} />
      <SignUpModal isOpen={isSignUpModalOpen} setModalOpen={setSignUpModalOpen} />
    </>
  );
};

export default SearchHeader;