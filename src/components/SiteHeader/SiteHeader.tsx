import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import HeaderUserButtons from '../HeaderUserButtons/HeaderUserButtons';
import styles from './SiteHeader.module.css';
import whiteLogo from '../../images/dk-white-logo.png';

const SiteHeader: React.FunctionComponent = () => {
  const history: any = useHistory();
  const [input, setInput] = useState('');

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      history.push('/search', { searchInput: input });
    }
  }

  return (
    <>
      <div className={styles['site-header']}>
        <div className={styles['site-header-top']}>
          <div className={styles['digital-kampung-div']}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={{
                pathname: '/',
              }}
            >
              <img className={styles['digital-kampung-logo']} src={whiteLogo} alt=""></img>
            </Link>
          </div>
          <div className={styles['header-button-group']}>
            <Button className={styles['header-button']}>Kampung Centre</Button>
            <HeaderUserButtons isMainHeader={true} />
          </div>
        </div>
        <div className={styles['site-header-top']}>
          <div className={styles['slogan-text']}>Craving for some hawker food?</div>
          <div className={styles['search-bar']}>
            <Input
              fluid
              className={styles['search-bar-input']}
              placeholder="Search for hawker centre / food"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleEnter}
            />
            <Link
              to={{
                pathname: '/search',
                state: {
                  searchInput: input,
                },
              }}
            >
              <Button className={styles['search-button-primary']}>Search</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
