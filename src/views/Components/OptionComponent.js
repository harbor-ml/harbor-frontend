import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkboxes from './Checkboxes'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const OptionComponent = (props) => {
  const { classes } = props;
  const { searchFunc } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Discriminative Models
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Checkboxes
          searchFunc={searchFunc}
          customLabels={['Vision Classification', 'Vision Detection']}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Generative Models</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Checkboxes
            searchFunc={searchFunc}
            customLabels={['Text Generation', 'Image Generation', 'Audio Generation']}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

OptionComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionComponent);
