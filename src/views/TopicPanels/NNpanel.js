import React from 'react';

import nn_pic from './assets/nn_ex.png'
import nn_eq1 from './assets/obj_nn.gif'
import nn_eq2 from './assets/nn_eq.gif'

const NNpanel = props => (
  <div>
  As we have shown, being able to take the gradient of our objective is critical to machine learning;
  however, the objective function can often be messy and hard to differentiate. This is where Neural
  Nets enter the field. Neural Nets are a graphical way to represent the composition of functions.
  By composing simpler functions that we know how to differentiate, we can apply multivariate chain
  rule and more easily differentiate our objective function with respect to our inputs.
  <br/>
  <br/>
  Below is an example neural net:
  <br/>
  <img src={nn_pic} alt="nn pic" />
  <br/>
  <br/>
  In the forward pass, we compute <img src={nn_eq1} alt="nn eq1"/>. In the
  backward pass, we compute the gradient of the objective with respect to the input -
  <br/>
  <br/>
  <img src={nn_eq2} alt="nn eq2" />
  </div>
)
