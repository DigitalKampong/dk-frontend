import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Icon, Input } from 'semantic-ui-react';
import HeaderUserButtons from '../HeaderUserButtons/HeaderUserButtons';
import styles from './SearchHeader.module.scss';
import darkLogo from '../../images/dk-dark-logo.png';
import blackLogo from '../../images/black-logo.png';
import isMobile from '../../mobile';

interface Props {
  isSearchPage: boolean;
  setQuery: Function;
}

const SearchHeader: React.FunctionComponent<Props> = (props: Props) => {
  const history: any = useHistory();
  const [input, setInput] = useState<string>('');

  function handleEnter(e: any): void {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch(): void {
    const trimmedInput: string = input.trim();
    if (props.isSearchPage) {
      props.setQuery(trimmedInput);
      return;
    }
    if (trimmedInput.length > 0) {
      history.push({
        pathname: `/search/${trimmedInput}`,
        search: '?limit=20&page=1',
        key: trimmedInput,
      });
    } else {
      history.push({
        pathname: `/search/`,
        search: '?limit=20&page=1',
        key: trimmedInput,
      });
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
              <img className={styles['digital-kampung-icon']} src={isMobile() ? blackLogo : darkLogo} alt=""></img>
            </Link>
          </div>
          <div>
            <div className={styles['header-button-group']}>
              {!isMobile() && (
                <Button basic className={styles['header-button']}>
                  Kampung Centre
                </Button>
              )}
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
            labelPosition="right"
            label={
              <Button id="search" className={styles['search-button-primary']} onClick={handleSearch} icon={isMobile()}>
                {isMobile() ? <Icon name="search"></Icon> : 'Search'}
              </Button>
            }
          />
        </div>
      </div>
      <div className={styles['search-header-filler']}></div>
    </>
  );
};

export default SearchHeader;
