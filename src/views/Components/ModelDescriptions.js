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
      {
        ((title) => {
          if (title === "Resnet 50" || title === "Inception V3") {
            return (
              <div>
                {topics.ML}
                {topics.NN}
                {topics.RNN}
              </div>
            )
          } else if (title === "SSD Mobilenet") {
            return (
              <div>
                {topics.ML}
                {topics.NN}
              </div>
            )
          } else {
            return topics.ML
          }
        })(selectedModel.title)
      }
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
