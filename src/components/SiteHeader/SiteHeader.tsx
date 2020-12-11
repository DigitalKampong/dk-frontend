import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import './SiteHeader.css';

const SiteHeader: React.FunctionComponent = () => {
  return (
    <>
      <div className="site-header">
        <div className="digital-kampong-icon">Digital Kampong</div>
        <div className="header-button-group">
          <Button basic className="header-button">Kampong Centre</Button>
          <Button basic className="header-button">Sign up</Button>
          <Button className="header-button-primary">Log in</Button>
        </div>
        <div className="slogan-text">
          Find your favourite Hawker!
        </div>
        <div className="search-bar">
          <Input fluid className="search-bar-input" placeholder='search for hawker centre / food' />
          <Button className="search-button-primary">Search</Button>
          <Button basic className="search-button">Filters</Button>
        </div>
      </div>
      <div className="site-header-filler"></div>
    </>
  );
};

export default SiteHeader;