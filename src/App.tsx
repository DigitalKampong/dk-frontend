import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import StallPage from './pages/StallPage/StallPage';
import HawkersPage from './pages/HawkersPage/HawkersPage';
import IndividualHawker from './pages/IndividualHawker/IndividualHawker';
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
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
