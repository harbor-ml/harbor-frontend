import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadComponent from './UploadComponent';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getData} from '../../redux/actions';
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

function CustomButton(props) {
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

// Table Component
const tableStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const { classes } = props;
  const { output } = props;
  const { colNames } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          {colNames.map((colName, index) => {
            if (index===colNames.length - 1) {
              return (<TableCell align="right" key={index}>{colName}</TableCell>);
            } else {
              return (<TableCell component="th" key={index}>{colName}</TableCell>);
            }
          })}
          </TableRow>
        </TableHead>
        <TableBody>
          {output.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row[1]}
                </TableCell>
                <TableCell align="right">{row[2]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const OutputTable = withStyles(tableStyles)(SimpleTable);

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

const SubmitAlert = withStyles(snackbarStyles)(MySnackbarContent);

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
    this.handleOutput = this.handleOutput.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleImageDelete = this.handleImageDelete.bind(this);

    this.state = {
      ...this.props.selectedModel.params,
      output: null,
      openSnackbarFail: false,
      openSnackbarSuccess: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedModel !== this.props.selectedModel){
      this.setState({selectedModel: nextProps.selectedModel });
    } else if (nextProps.data !== this.props.data) {
      this.handleOutput(nextProps.data);
    }
  }

  decideHTMLComponent(param, classes, inputType, key) {
    if (inputType === "String") {
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
        [name]: event.target.value
      });
    };
  }

  handleImageUpload(newFile) {
    if (this.state.Data === "data" || this.state.Data === null || this.state.Data === undefined) {
      this.setState({
        img: [newFile]
      });
    } else {
      this.setState({
        img: [...this.state.img, newFile]
      });
    }
  }

  handleImageDelete(file) {
    if (this.state.Data === "data" || this.state.Data === null) {
      this.setState({
        img: []
      });
    } else {
      var newData = this.state.img.filter((val) => {
        return val !== file
      });
      this.setState({
        img: newData
      });
    }
  }

  submit(event) {
    // console.log(this.state)
    if (this.state.url === "") {
      console.log("Error: no URL");
      return null;
    }
    // Bypassing for rn:
    // const {url} = this.state;
    // const params = _.omit(this.state, ['url', 'output']);
    // console.log(params);
    //
    // // Form validation
    // for (var field in params) {
    //   this.props.selectedModel.params.forEach((val) => {
    //     if (params[field] === this.props.selectedModel.params[field]
    //         || params[field] === "" || (params[field]
    //           && params[field].constructor === Array && params[field].length === 0)) {
    //       //console.log("Error: fields not filled: " + field);
    //       this.handleOpenSnackbarFail();
    //       return null;
    //     }
    //   });
    // }

    //console.log(this.state);
    //console.log(JSON.stringify(params));

    if (this.state.img === null || this.state.img === undefined || this.state.img.length === 0) {
      this.handleOpenSnackbarFail();
      return null;
    }

    if (this.state.img[0].startsWith("data:image/png;base64") === false && this.state.img[0].startsWith("data:image/jpeg;base64") === false) {
      this.handleOpenSnackbarFail();
      return null;
    }

    this.handleOpenSnackbarSuccess();

    // Send API request to backend
    /* Use a action method to do api request with getData  */

    //const query = { "input": this.state.img };
    const {id, versions} = this.props.selectedModel;
    this.props.getData(id, versions[0], this.state.img[0]);
  }

  handleOutput(data) {
    if (this.props.selectedModel.output_type === "list_vals") {
      // sample output
      this.setState({
        output: [ "Sample Output 1", "Sample Output 2", "Sample Output 3"]
      });
    } else if (this.props.selectedModel.output_type === "list_tups" && this.props.selectedModel.output_attr.output_render === "table") {
      // eslint-disable-next-line
      var prettyData = data.output.split(/['\[\](),]/).filter((val) => {
        return val.length > 0 && val !== " "
      });

      var tableWidth = this.props.selectedModel.output_attr.table_width;

      var tinyArr = [];
      var bigMat = [];

      prettyData.forEach((val, index) => {
        if (index % tableWidth === 0) {
          tinyArr = [val]
        } else if (index % tableWidth === tableWidth - 1) {
          tinyArr = [...tinyArr, val]
          bigMat.push([...tinyArr])
          tinyArr = []
        } else {
          tinyArr = [...tinyArr, val]
        }
      });

      if (data.output === "default") {
        var default_output = [];
        for (var i = 0; i < tableWidth; i = i + 1) {
          default_output = [...default_output, "No Data"]
        }
        this.setState({
          output: [default_output]
        });
      } else {
        this.setState({
          output: bigMat
        });
      }
    } else {
      return null;
    }
  }

  handleOpenSnackbarFail() {
    this.setState({ openSnackbarFail: true });
  };

  handleOpenSnackbarSuccess() {
    this.setState({ openSnackbarSuccess: true });
  };

  handleCloseSnackbar(event, reason) {
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

    const paramInputs = modelParams.map((val, index) => {
      if (val.paramType !== "String" && val.paramType !== "number") {
          generalInput.push({
            [val.paramName]: val.paramType
          });
      }
      return this.decideHTMLComponent(val.paramName, classes, val.paramType, index);
    });

    const dataInputs = generalInput.map((v, i) => {
      return (
        <UploadComponent key={i}
                         handleImageUpload={this.handleImageUpload}
                         handleImageDelete={this.handleImageDelete}/>
      )
    });

    var output = null;
    if (this.state.output === null || this.state.output === undefined || this.state.output.length === 0) {
      output = null;
    } else if (this.props.selectedModel.output_type === "list_vals" && this.state.output !== null) {
      output = (
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
      );
    } else if (this.props.selectedModel.output_type === "list_tups" && this.props.selectedModel.output_attr.output_render === "table" && this.state.output !== null) {
      output = (
        <OutputTable output={this.state.output} colNames={this.props.selectedModel.output_attr.table_columns}/>
      );
    } else {
      output = null;
    }

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
      {output}

      {/* Snackbars */}
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbarFail}
          autoHideDuration={3000}
          onClose={this.handleCloseSnackbar}
        >
          <SubmitAlert
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
          autoHideDuration={3000}
          onClose={this.handleCloseSnackbar}
        >
          <SubmitAlert
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
    selectedModel: state.selectedModel,
    data: state.data
  };
};
const functions = {getData};
export default connect(mapStateToProps, functions)(withStyles(styles)(InputFields));
