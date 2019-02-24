import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
  state = {
    text: '',
    num_tries: 0,
    num_words: 0,
    multiline: 'Controlled'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Text Input"
          placeholder="Type whatever you want"
          multiline
          fullWidth
          className={classes.textField}
          onChange={this.handleChange('text')}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="outlined-number"
          label="Number of Words"
          value={this.state.age}
          onChange={this.handleChange('num_words')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-number"
          label="Number of Tries"
          value={this.state.age}
          onChange={this.handleChange('num_tries')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="Output"
          style={{ margin: 8 }}
          placeholder="Result"
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
      </form>
    );
  }
}

InputFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputFields);
