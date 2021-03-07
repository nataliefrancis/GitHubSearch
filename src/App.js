//import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './search';
import Table from './table';
import Details from './details';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/results" component={Table} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    )
  }

}

export default App;
