import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, Icon } from 'semantic-ui-react';
import HeaderUserButtons from '../HeaderUserButtons/HeaderUserButtons';
import styles from './SearchHeader.module.scss';
import { darkLogo, blackLogo } from '../../images/image_modules';
import isMobile from '../../mobile';

interface Props {
  isSearchPage: boolean;
  setQuery: Function;
  toggleFilterNavBar: Function;
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
          <div className={styles['header-button-group']}>
            {props.isSearchPage && isMobile() ? (
              <Button basic={true} className={styles['filter-button-primary']} onClick={() => props.toggleFilterNavBar()}>
                Filters
              </Button>
            ) : null}
            <HeaderUserButtons isMainHeader={false} />
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

/*

        <div className={styles['mobile-search-header-top']}>
          {props.isSearchPage ? (
            <div className={styles['filter-button']} onClick={() => props.toggleFilterNavBar()}>
              Filters
            </div>
          ) : null}
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={{
              pathname: '/',
            }}
          >
            <div className={styles['digital-kampung-title']}>Digital Kampung</div>
          </Link>
          <div className={styles['menu-div']}>
            <img className={styles['menu-btn']} src={menuIcon} alt="" />
          </div>
        </div>
*/
