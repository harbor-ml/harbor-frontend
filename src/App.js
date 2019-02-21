import React, { Component } from 'react';
import logo from './logo.svg';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import SwipeableTemporaryDrawer from './views/tests/SwipeableTemporaryDrawer';
import PersistentDrawerLeft from './views/tests/PersistentDrawerLeft';
import MiniDrawer from './views/tests/MiniDrawer';

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Lato"'
	}
});

class App extends Component {
  render() {
    return (
      <div className="App">
      	<MuiThemeProvider theme={theme}>
			<MiniDrawer />
		</MuiThemeProvider>
      </div>
    );
  }
}

export default App;
