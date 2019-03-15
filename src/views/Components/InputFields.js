import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadComponent from './UploadComponent';
import _ from 'lodash';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import classNames from 'classnames';
//import axios from 'axios';
//import MenuItem from '@material-ui/core/MenuItem';

// Button Component
const buttonStyles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const CustomButton = (props) => {
  const {classes} = props;
  const {clickFunction} = props;
  return (
    <div>
      <Button variant="outlined" onClick={clickFunction} size="medium" color="primary" className={classes.margin}>
        Submit
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SubmitButton = withStyles(buttonStyles)(CustomButton);

// Snackbar Component
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const snackbarStyles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(snackbarStyles)(MySnackbarContent);

// Input Field Component
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class InputFields extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.decideHTMLComponent = this.decideHTMLComponent.bind(this);
    this.submit = this.submit.bind(this);
    this.handleOpenSnackbarSuccess = this.handleOpenSnackbarSuccess.bind(this);
    this.handleOpenSnackbarFail = this.handleOpenSnackbarFail.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);

    this.state = {
      ...this.props.selectedModel.params,
      url: this.props.selectedModel.url,
      output: [],
      openSnackbarFail: false,
      openSnackbarSuccess: false
    }
  }

  decideHTMLComponent(param, classes, inputType, key) {
    if (inputType === "text") {
      return (
        <TextField
          key={key}
          id="outlined-textarea"
          label={param}
          placeholder="Type whatever you want"
          multiline
          fullWidth
          className={classes.textField}
          onChange={this.handleChange(param)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      );
    } else if (inputType === "number") {
      return (
        <TextField
          key={key}
          id="outlined-number"
          label={param}
          onChange={this.handleChange(param)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
      );
    }
    return null;
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        ...this.state,
        [name]: event.target.value,
      });
    };
  }

  submit(event) {
    if (this.state.url === "") {
      console.log("Error: no URL");
      return null;
    }

    //const {url} = this.state;
    const params = _.omit(this.state, ['url', 'output']);

    // Form validation
    for (var field in params) {
      if (params[field] === this.props.selectedModel.params[field] || params[field] === "") {
        console.log("Error: fields not filled: " + field);
        this.handleOpenSnackbarFail();
        return null;
      }
    }
    //console.log(this.state);
    console.log(JSON.stringify(params));
    this.handleOpenSnackbarSuccess();

    // Send API request to backend
    /*axios({
        method: 'post',
        url: url,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          "input": "{\"text\": \"trump says hi\", \"num_words\": 50, \"num_tries\": 3}"
        }
    }).then((response) => {
      console.log(response);
      this.setState({
        ...this.state,
        output: response.data.output
      })
    }).catch((e) => {
      console.log(e);
    });*/
  }

  handleOpenSnackbarFail = () => {
    this.setState({ openSnackbarFail: true });
  };

  handleOpenSnackbarSuccess = () => {
    this.setState({ openSnackbarSuccess: true });
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      openSnackbarSuccess: false,
      openSnackbarFail: false
    });
  };

  render() {
    const { classes } = this.props;
    const modelParams = this.props.selectedModel.params;
    var generalInput = [];

    const paramInputs = Object.keys(modelParams).map((key, index) => {
      var inputType = modelParams[key];
      if (inputType !== "text" && inputType !== "number") {
          generalInput.push({
            [key]: inputType
          });
      }
      return this.decideHTMLComponent(key, classes, inputType, index);
    });

    const dataInputs = generalInput.map((v, i) => <UploadComponent key={i}/>);

    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off">
        {paramInputs}
      </form>
      {dataInputs}
      <br />
      <br />
      <div>
        <SubmitButton clickFunction={this.submit} />
      </div>
      <br />

      {/* Output below */}
      <form className={classes.container} noValidate autoComplete="off">
        {
          this.state.output.map((val, index) => {
            return (
              <TextField
                key={index}
                id="outlined-full-width"
                label={`Output ${index + 1}:`}
                style={{ margin: 8 }}
                value={val}
                multiline
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
            )
          })
        }
      </form>

      {/* Snackbars */}
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbarFail}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
        >
          <MySnackbarContentWrapper
            onClose={this.handleCloseSnackbar}
            variant="error"
            message="Please fill in all the fields."
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbarSuccess}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
        >
          <MySnackbarContentWrapper
            onClose={this.handleCloseSnackbar}
            variant="success"
            message="Successully submitted data!"
          />
        </Snackbar>
      </div>

      </div>
    );
  }
}

InputFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedModel: state.selectedModel
  };
};

export default connect(mapStateToProps)(withStyles(styles)(InputFields));
