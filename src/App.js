import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/HomePage';
import Model from './views/ModelPage';
import Wrapper from './views/Wrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
