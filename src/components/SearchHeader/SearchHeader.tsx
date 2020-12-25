import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import { SearchProps } from '../../types/Search';
import styles from './SearchHeader.module.css';

const SearchHeader: React.FunctionComponent<SearchProps> = (props) => {

  const {searchInput, handleChange} = props;

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
          <Button basic className={styles["header-button"]}>Sign up</Button>
          <Button className={styles["header-button-primary"]}>Log in</Button>
        </div>
        <div className={styles["search-bar"]}>
          <Input 
            fluid 
            className={styles["search-bar-input"]} 
            placeholder='search for hawker centre / food' 
            value={searchInput} 
            onChange={e => handleChange(e.target.value)}
          />
          <Button id="search" className={styles["search-button-primary"]}>Search</Button>
          <Button basic className={styles["search-button"]}>Filters</Button>
        </div>
      </div>
      <div className={styles["search-header-filler"]}></div>
    </>
  );
};

export default SearchHeader;