import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import HeaderUserButtons from '../HeaderUserButtons/HeaderUserButtons';
import styles from './SearchHeader.module.css';
import darkLogo from '../../images/dk-dark-logo.png';

const SearchHeader: React.FunctionComponent = () => {
  const history: any = useHistory();
  const [input, setInput] = useState<string>('');

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      history.push('/search/' + input.trim());
    }
  }

  return (
    <>
      <div className={styles['search-header']}>
        <div className={styles['search-header-top']}>
          <div className={styles['digital-kampung-div']}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={{
                pathname: '/',
              }}
            >
              <img className={styles['digital-kampung-icon']} src={darkLogo} alt=""></img>
            </Link>
          </div>
          <div>
            <div className={styles['header-button-group']}>
              <Button basic className={styles['header-button']}>
                Kampung Centre
              </Button>
              <HeaderUserButtons isMainHeader={false} />
            </div>
          </div>
        </div>
        <div className={styles['search-bar']}>
          <Input
            fluid
            className={styles['search-bar-input']}
            placeholder="Search for hawker centre / food"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleEnter}
          />
          <Button id="search" className={styles['search-button-primary']} onClick={() => history.push('/search/' + input.trim())}>
            Search
          </Button>
        </div>
      </div>
      <div className={styles['search-header-filler']}></div>
    </>
  );
};

export default SearchHeader;
