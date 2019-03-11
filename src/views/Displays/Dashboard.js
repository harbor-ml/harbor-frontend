import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getModels, initialLoad, selectModel} from '../../redux/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    opacity: 0.9,
    color: theme.palette.text.secondary,
    height: 380,
    textDecoration: "None",
    '&:hover': {
      opacity: 1
    }
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
      <Grow
        key={index}
        in={this.props.models.length > 0}
        style={{
          transformOrigin: '0 0 0',
       }}
       {...(this.props.models.length > 0 ? { timeout: index*100 + 100 } : {})}
      >
      <Grid
          onClick={(e) => this.setLoaded(e, val)}
          item xs={12} sm={6} md={4} lg={4}>
        <Link to={"/Model/" + val.id} style={{textDecoration: "None"}}>
          <Paper className={classes.paper}>
            <Typography variant="h4">{val.title}</Typography><br/>
            <Typography variant="h5">{val.description}</Typography>
          </Paper>
        </Link>
      </Grid>
      </Grow>
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
