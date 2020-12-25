import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import { MainSiteSearchProps } from '../../types/Search';
import styles from './SiteHeader.module.css';

const SiteHeader: React.FunctionComponent<MainSiteSearchProps> = ({searchInput}) => {

  const [currentSearchInput, setCurrentSearchInput] = useState(searchInput);

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
          <Input fluid className={styles["search-bar-input"]} placeholder='Search for hawker centre / food' value={currentSearchInput} onChange={e => setCurrentSearchInput(e.target.value)}/>
          <Link to={{
            pathname: "/search",
            state: {
              searchInput: currentSearchInput,
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