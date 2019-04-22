import React from 'react';

import rnn from './assets/rnn_ex.gv.png';
import rnn_eq from './assets/rnn_eq.gif';

const RNNpanel = props => (
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
)

export default RNNpanel;
