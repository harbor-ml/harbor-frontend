import React from 'react';

import MLpanel from './MLpanel'
import NNpanel from './NNpanel'
import RNNpanel from './RNNpanel'
import RNpanel from './RNpanel'

const topics = {
  ML: (<MLpanel />),
  NN: (<NNpanel />),
  RNN: (<RNNpanel />),
  RN: (<RNpanel />),
}

export default topics;
