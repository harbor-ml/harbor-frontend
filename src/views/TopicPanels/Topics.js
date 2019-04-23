import React from 'react';

import MLpanel from './MLpanel'
import NNpanel from './NNpanel'
import RNNpanel from './RNNpanel'

const topics = {
  ML: (<MLpanel />),
  NN: (<NNpanel />),
  RNN: (<RNNpanel />)
}

export default topics;
