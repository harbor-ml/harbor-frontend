import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import topics from '../TopicPanels/Topics';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansion: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  innerExpansion: {
    height: "auto"
  }
});

function ModelDescriptions(props) {
  const { classes, selectedModel } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansion}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>More Information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <div className={classes.innerExpansion}>
            {topics.ML}
            {
              ((title) => {
                if (title === "Resnet 50" || title === "Inception V3") {
                  return (
                    <div>
                      <br />
                      {topics.NN}
                      <br />
                      {topics.RNN}
                    </div>
                  )
                }
              })(selectedModel.title)
            }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ModelDescriptions.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => {
  return {
    selectedModel: reduxState.selectedModel
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(ModelDescriptions));
