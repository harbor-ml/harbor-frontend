import React, { Component } from 'react';
import OptionComponent from '../Components/OptionComponent';
import SearchBar from '../Components/SearchBar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getModels, initialLoad, selectModel, searchQuery} from '../../redux/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridlist: {
    width: "74%",
    height: "auto",
    maxHeight: "80vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit,
    opacity: 0.9,
    color: theme.palette.text.secondary,
    height: 330,
    textDecoration: "None",
    '&:hover': {
      opacity: 1
    }
  },
});


class Search extends Component {

  constructor(props) {
  	super(props);
  	this.editStateOptions = this.editStateOptions.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  	this.state = {
  		options: [], searchText: ""
  	};
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

  submitSearch() {
    const name = this.state.searchText.split(/[\s,-.]+/);
    // will do api call to backend with array of names and array of categories
    // basically just pass in the same array to both name and category
    const categories = [...this.state.option1, ...this.state.option2];
    this.props.searchQuery(name, categories);
  }

  editStateOptions(optionName, optionValue) {
  	var newState = {...this.state};
    if (optionName !== "searchText") {
      if (!optionValue) {
        newState.options = newState.options.filter((val) => {
          //console.log(val !== optionName);
          return val !== optionName
        });
      } else if (!newState.options.includes(optionName)) {
        newState.options.push(optionName);
      }
    } else {
      newState[optionName] = optionValue;
    }
    this.setState(newState);
  }

  render() {
    //console.log(this.state);
    const { classes } = this.props;
    var modelsToRender = this.props.models;

    if (this.state.searchText.length > 0 || this.state.options.length > 0) {
      modelsToRender = this.props.models.filter((val) => {
        if (this.state.searchText.length === 0) {
          return true
        }

        var searchTextTemp = this.state.searchText.toUpperCase();
        var modelTitle = val.title.toUpperCase();

        if (modelTitle.includes(searchTextTemp)) {
          return true
        } else {
          return false
        }
      });

      // Filter on category
      modelsToRender = modelsToRender.filter((val) => {
        const { options } = this.state;
        return options.includes(val.category) || options.length === 0;
      })
    }

    const renderedModels = modelsToRender.map( (val, index) =>
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
          item xs={12} sm={12} md={6} lg={4}>
        <Link to={"/Model/" + val.id} style={{textDecoration: "None"}}>
          <Paper className={classes.paper}>
            <Typography variant="h4">{val.title}</Typography><br/>
            <Typography style={{fontSize: "1rem"}}>
              {val.desc}
            </Typography>
          </Paper>
        </Link>
      </Grid>
      </Grow>
    );

    return (
        <div>
        <SearchBar searchFunc={this.editStateOptions} />
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{width: "25%", marginRight: "16px"}}>
            <OptionComponent searchFunc={this.editStateOptions} />
            <Button onClick={this.submitSearch}
                    variant="outlined"
                    component="span"
                    className={classes.button}>
              Search
            </Button>
          </div>
          <Grid container direction="row" alignItems="flex-start"
                    justify="flex-start" spacing={16}
                    className={classes.gridlist}>
            {renderedModels}
          </Grid>
        </div>
        </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    loaded: reduxState.loaded,
    models: reduxState.models
  }
};

const functions = {getModels, initialLoad, selectModel, searchQuery};
export default connect(mapStateToProps, functions)(withStyles(styles)(Search));
