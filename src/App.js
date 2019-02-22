import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import Menu from './views/tests/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Menu />
      </div>
    );
  }
}

export default App;
