import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import { MainSiteSearchProps } from '../../types/Search';
import './SiteHeader.css';

const SiteHeader: React.FunctionComponent<MainSiteSearchProps> = ({searchInput}) => {

  const [currentSearchInput, setCurrentSearchInput] = useState(searchInput);

  return (
    <>
      <div className="site-header">
        <Link
          style={{textDecoration: 'none', color: "black"}}
          to={{
            pathname: "/"
          }}
        >
          <div className="digital-kampong-icon">Digital Kampong</div>
        </Link>
        <div className="header-button-group">
          <Button basic className="header-button">Kampong Centre</Button>
          <Button basic className="header-button">Sign up</Button>
          <Button className="header-button-primary">Log in</Button>
        </div>
        <div className="slogan-text">
          Find your favourite Hawker!
        </div>
        <div className="search-bar">
          <Input fluid className="search-bar-input" placeholder='search for hawker centre / food' value={currentSearchInput} onChange={e => setCurrentSearchInput(e.target.value)}/>
          <Link to={{
            pathname: "/search",
            state: {
              searchInput: currentSearchInput,
            }
          }}>
            <Button className="search-button-primary">Search</Button>
          </Link>
          <Button basic className="search-button">Filters</Button>
        </div>
      </div>
      <div className="site-header-filler"></div>
    </>
  );
};

export default SiteHeader;