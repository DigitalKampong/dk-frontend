import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import styles from './SiteHeader.module.css';

const SiteHeader: React.FunctionComponent = () => {

  const [input, setInput] = useState("");

  return (
    <>
      <div className={styles["site-header"]}>
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
          <Button basic className={styles["header-button"]}>Sign up</Button>
          <Button className={styles["header-button-primary"]}>Log in</Button>
        </div>
        <div className={styles["slogan-text"]}>
          Craving for some hawker food?
        </div>
        <div className={styles["search-bar"]}>
          <Input fluid className={styles["search-bar-input"]} placeholder='Search for hawker centre / food' value={input} onChange={e => setInput(e.target.value)}/>
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