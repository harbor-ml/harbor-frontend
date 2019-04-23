import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

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
    boxShadow: "none"
  },
});

const MLpanel = props => (

    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={props.classes.heading}>
          What is Machine Learning?
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          Machine Learning is the process of predicting answers to questions, given previous examples.
          A lot of machine learning boils down to math techniques rooted in multivariate calculus and linear algebra,
          such as gradient descent, a technique fundamental to today's research in neural nets, which we shall discuss shortly.
          <br />
          <br />
          The machine learning lifecycle starts by posing a question - for example, is it possible to predict tommorow's
          weather, given todays. Next is data gathering and cleaning - the researcher may contact the local weather
          station and ask for the weather records for the previous few years, after which they clean it - perhaps by
          removing outliers or corrupted data points. The researcher then decides what kind of model to use, and then
          comes up with an objective function - a function that takes in the model's prediction, as well as the ground
          truth, and returns a measure of the model's accuracy or predictive ability. After, the researcher usually
          performs optimization on the objective function, via a technique such as gradient descent.
          Gradient descent entails taking the gradient (the higher dimensional abstraction of the derivative) of
          the objective function, and "hill-climbing" - using the gradient as an indication of the direction that
          we should shift the input to decrease the value of the objective function.
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  
)

MLpanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MLpanel);
