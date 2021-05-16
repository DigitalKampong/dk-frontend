import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import StallPage from './pages/StallPage/StallPage';
import HawkersPage from './pages/HawkersPage/HawkersPage';
import IndividualHawker from './pages/IndividualHawker/IndividualHawker';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import styles from './App.module.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className={styles['body']}>
        <Switch>
          <Route path="/hawkers/:id" component={IndividualHawker} />
          <Route path="/stalls/:id" component={StallPage} />
          <Route path="/hawkers" component={HawkersPage} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
