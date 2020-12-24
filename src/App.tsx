import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import HawkersPage from "./pages/HawkersPage/HawkersPage";
import IndividualHawker from "./pages/IndividualHawker/IndividualHawker";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hawkers/:id" component={IndividualHawker}/>
        <Route path="/hawkers" component={HawkersPage}/>
        <Route path="/search" component={SearchPage} />
        <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
