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
  render() {
    const model = this.props.selectedModel;
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

export default connect(mapStateToProps, {})(Model);
