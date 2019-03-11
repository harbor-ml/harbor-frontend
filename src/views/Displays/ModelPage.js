import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import InputFields from '../Components/InputFields';
import {initialLoadWithSelection} from '../../redux/actions';

// will need to be changed to react to go back anywhere
const MyLink = (props) => <Link to="/" {...props} />
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const CustomButton = (props) => {
  const {classes} = props;
  return (
    <div>
      <Button variant="outlined" component={MyLink} size="medium" color="primary" className={classes.margin}>
        <ChevronLeftIcon className={classes.extendedIcon} />Back
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModelButton = withStyles(styles)(CustomButton);

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: this.props.selectedModel
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedModel !== this.props.selectedModel){
      console.log(nextProps.selectedModel);
      this.setState({selectedModel: nextProps.selectedModel });
    }
  }

  componentDidMount() {
    var model = this.state.selectedModel;
    if (model === undefined || model === null) {
      var urlPath = window.location.pathname.split("/")
      const id = parseInt(urlPath[urlPath.length - 1]);
      this.props.initialLoadWithSelection(id);
    }
  }

  render() {
    const model = this.state.selectedModel;
    if (model === null || model === undefined) {
      return (
        <div>
          Loading
        </div>
      )
    }

    return (
      <div>
        <ModelButton /><br/>
				<Typography variant="h2">{model.title}</Typography><br />
        <Typography variant="h5">{model.description}</Typography>
        <br /><Divider /><br />
        <Typography variant="h5">Demo:</Typography><br />
        <InputFields modelParams={{...model.params, url: model.url}}/>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    selectedModel: reduxState.selectedModel
  }
};

export default connect(mapStateToProps, {initialLoadWithSelection})(Model);
