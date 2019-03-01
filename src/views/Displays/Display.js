import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Model from './ModelPage';
import Search from './SearchPage';
import {Switch, Route} from 'react-router-dom';

class Display extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Model/:id" component={Model}/>
          <Route exact path="/Models" component={Search}/>
        </Switch>
      </div>
    );
  }
}

export default Display;
