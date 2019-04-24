import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightRegular,
  }
});

const RNpanel = props => (
  <ExpansionPanel className={props.classes.expansion}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={props.classes.heading}>
        What are Residual Networks?
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <div>
        The ResNet Architecture was popularized for its accuracy in feature extraction from images.
        One problem with extremely deep neural networks is vanishing gradients.
        As we propagate backwards through the network, signals from the upstream
        layers are continually multiplied by smaller numbers and can become
        essentially zero. This prevents weights from accurately updating with each
        training step.
        <br />
        <br />
        ResNet solves this problem by adding "residual" or "skip" connections.
        These connections split the activations at a given point in the network.
        It passes the activations through a set of convolution layers and normalizes
        them, then adds back the original activations at the end.  This causes
        strong signals to be propagated through the network, even if it is
        extremely deep! ResNet architectures have managed to train networks deeper than 150 layers!
      </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

RNpanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RNpanel);
