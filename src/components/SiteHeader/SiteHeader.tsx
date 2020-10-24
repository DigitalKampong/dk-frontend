import React from 'react';
import { Button, Grid, Input } from 'semantic-ui-react';
import './SiteHeader.css';

const SiteHeader: React.FunctionComponent = () => {
  return (
    <div className="site-header">
      <Grid>
        <Grid.Row className="header-button-row">
          <Grid.Column>
            <span className="header-button-group">
              <Button basic>Kampong Centre</Button>
              <Button className="sign-in-button">Sign in</Button>
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <div className="digital-kampong-icon">Digital<br/>Kampong</div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Input fluid icon='search' placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default SiteHeader;