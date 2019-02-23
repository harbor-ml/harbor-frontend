import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getModels, initialLoad, selectModel} from '../../redux/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: 380
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.setLoaded = this.setLoaded.bind(this);
  }

  componentDidMount() {
    // Fill this in with GET Request to API
    if (!this.props.loaded) {
        this.props.initialLoad();
    }
  }

  setLoaded(e, val) {
    this.props.selectModel(val);
  }

  render() {
    const { classes } = this.props;

    const renderedModels = this.props.models.map( (val, index) =>
      <Grid
          onClick={(e) => this.setLoaded(e, val)}
          key={index} item xs={12} sm={6} md={4} lg={4}>
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => {
  return {
    loaded: reduxState.loaded,
    models: reduxState.models
  }
};

const functions = {getModels, initialLoad, selectModel};
export default connect(mapStateToProps, functions)(withStyles(styles)(Dashboard));
