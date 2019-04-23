import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import rnn from './assets/rnn_ex.gv.png';
import rnn_eq from './assets/rnn_eq.gif';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightRegular,
  }
});

const RNNpanel = props => (
  <ExpansionPanel className={props.classes.expansion}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={props.classes.heading}>
        What are Residual Neural Networks?
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <div>
        Something you may notice is that in the backwards pass, we multiply successive
        gradients together. If our gradients have a magnitude less than 1, then we run
        into the issue of *vanishing gradients*, where successive multiplication by fractional
        values causes the gradient to become too small to be useful, especially when
        using deep neural nets, which are often necessary to model and solve complex problems.
        <br/>
        <br/>
        Residual Neural Nets were invented to help alleviate this issue. By adding the
        input to a node to its output, they ensure that there is an additional $+1$ term when
        computing the gradient, to make sure that its magnitude is greater than 1. The neural
        net above, for example, could look like the following, if we added a residual layer:
        <br/>
        <br/>
        <img src={rnn} alt="rnn" />
        <br/>
        <br/>
        Now, the gradient of the objective with respect to the input is:
        <br/>
        <img src={rnn_eq} alt="rnn equation"/>
      </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

RNNpanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RNNpanel);
