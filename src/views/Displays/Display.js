import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Model from './ModelPage';
import Search from './SearchPage';
import {Switch, Route} from 'react-router-dom';

import SimpleExpansionPanel from '../Components/ExpansionPanel'
import Checkboxes from '../Components/Checkboxes'

class Display extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Model/:id" component={Model}/>
          <Route exact path="/Models" component={Search}/>
          <Route exact path="/Expansion" component={SimpleExpansionPanel}/>
          <Route exact path="/Checkboxes" component={Checkboxes}/>
        </Switch>
      </div>
    );
  }
}

export default Display;
