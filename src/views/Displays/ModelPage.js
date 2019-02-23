import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Model extends Component {
  render() {
    return (
      <div>
        <Link to="/" >Back</Link><br/><br/>
				Model Id:<br/>
        {this.props.selectedModel}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    selectedModel: reduxState.selectedModel
  }
};

export default connect(mapStateToProps, {})(Model);
