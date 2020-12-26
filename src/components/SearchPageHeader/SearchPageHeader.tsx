import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import styles from './SearchPageHeader.module.css';

interface SearchPageHeaderProps {
  searchInput: string;
  handleSearch: Function;
}

const SearchPageHeader: React.FunctionComponent<SearchPageHeaderProps> = (props) => {

  const {searchInput, handleSearch} = props;
  const [input, setInput] = useState<string>(searchInput);
  

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      handleSearch(input);
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
          <Button basic className={styles["header-button"]}>Sign up</Button>
          <Button className={styles["header-button-primary"]}>Log in</Button>
        </div>
        <div className={styles["search-bar"]}>
          <Input
            fluid 
            className={styles["search-bar-input"]} 
            placeholder='search for hawker centre / food'
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            onKeyPress={handleEnter}
          />
          <Button
            id="search" 
            className={styles["search-button-primary"]}
            onClick={() => handleSearch(input)}
          >
            Search
          </Button>
        </div>
      </div>
      <div className={styles["search-header-filler"]}></div>
    </>
  );
};

export default SearchPageHeader;