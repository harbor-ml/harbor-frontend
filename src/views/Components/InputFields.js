import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
//import axios from 'axios';
//import MenuItem from '@material-ui/core/MenuItem';
//import classNames from 'classnames';

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

const mapStateToProps = state => {
  return {
    selectedModel: state.selectedModel
  };
};

class InputFields extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.decideHTMLComponent = this.decideHTMLComponent.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      ...this.props.selectedModel.params,
      url: this.props.selectedModel.url,
      output: []
    }

    console.log("state: ");
    console.log(this.state)
    console.log("props: ");
    console.log(this.props)
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
    // console.log("handling change");
    // console.log(this.state);
    return (event) => {
      this.setState({
        ...this.state,
        [name]: event.target.value,
      });
    };
  }

  submit(event) {
    if (this.state.url === "") {
      return null;
    }

    //const {url} = this.state;
    const params = _.omit(this.state, ['url', 'output']);

    console.log("submitting")
    //console.log(this.state);
    console.log(JSON.stringify(params));

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

  render() {
    const { classes } = this.props;
    const modelParams = this.state;

    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off">
        {Object.keys(modelParams).map((key, index) => {
          var inputType = modelParams[key];
          return this.decideHTMLComponent(key, classes, inputType, index);
        })}
      </form>
      <div>
        <SubmitButton clickFunction={this.submit} />
      </div>
      <br />
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
      </div>
    );
  }
}

InputFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(InputFields));
