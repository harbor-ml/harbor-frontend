import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 380
  },
});

class Display2 extends React.Component {
  state = {
    models: [1, 2, 3, 4, 5]
  }

  componentDidMount() {
    // Fill this in with GET Request to API
  }

  render() {
    const { classes } = this.props;

    const renderedModels = this.state.models.map( val =>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link to={"/Model/" + val}>
          <Paper className={classes.paper}>
            Model: {val}
          </Paper>
        </Link>
      </Grid>
    );

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {renderedModels}
        </Grid>
      </div>
    );
  }
}

Display2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Display2);
