import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {};

    for (var i = 0; i < props.customLabels.length; i++) {
      var option = props.customLabels[i];
      this.state[option] = false;
    }
  }

  handleChange(name, event) {
    this.setState({
      ...this.state,
      [name]: event.target.checked,
    });
  }

  render() {
    //const { classes } = this.props;
    const { searchFunc } = this.props;

    const controls = this.props.customLabels.map((val, index) => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.val}
              onChange={(e) => {
                searchFunc(val, e.target.checked);
                this.handleChange(val, e);
              }}
              color="primary"
            />
          }
          key={index}
          label={val}
        />
      )
    });


    return (
      <FormGroup>
        {controls}
      </FormGroup>
    );
  }
}

Checkboxes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkboxes);
