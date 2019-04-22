import React from 'react';

const MLpanel = props => (
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
)

export default MLpanel;
