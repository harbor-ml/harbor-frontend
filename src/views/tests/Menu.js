import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import MiniDrawer from './MiniDrawer';

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Lato"'
	}
});

class Menu extends Component {
  render() {
    return (
      <div>
				<MuiThemeProvider theme={theme}>
					<MiniDrawer />
				</MuiThemeProvider>
      </div>
    );
  }
}

export default Menu;
