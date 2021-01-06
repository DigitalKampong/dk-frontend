import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import styles from './SiteHeader.module.css';
import darkLogo from '../../images/digitalkampungblacklogo.png';

const SiteHeader: React.FunctionComponent = () => {

  const history: any = useHistory();
  const [input, setInput] = useState("");

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      history.push('/search', {searchInput: input})
    }
  }

  return (
    <>
      <div className={styles["site-header"]}>
        <Link
          style={{textDecoration: 'none', color: "black"}}
          to={{
            pathname: "/"
          }}
        >
          <div className={styles["digital-kampong-div"]}>
            <img className={styles["digital-kampong-logo"]} src={darkLogo} alt=""></img>
          </div>
        </Link>
        <div className={styles["header-button-group"]}>
          <Button basic className={styles["header-button"]}>Kampong Centre</Button>
          <Button basic className={styles["header-button"]}>Sign up</Button>
          <Button className={styles["header-button-primary"]}>Log in</Button>
        </div>
        <div className={styles["slogan-text"]}>
          Craving for some hawker food?
        </div>
        <div className={styles["search-bar"]}>
          <Input 
            fluid 
            className={styles["search-bar-input"]} 
            placeholder='Search for hawker centre / food' 
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
            <Button className={styles["search-button-primary"]}>Search</Button>
          </Link>
        </div>
      </div>
      <div className={styles["site-header-filler"]}></div>
    </>
  );
};

export default SiteHeader;