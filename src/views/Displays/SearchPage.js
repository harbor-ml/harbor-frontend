import React, { Component } from 'react';
import OptionComponent from '../Components/OptionComponent';

/*

function ____() {

}

const ___ = () => {

}


*/


class Search extends Component {

  constructor(props) {
  	super(props);
  	this.editStateOptions = this.editStateOptions.bind(this);
  	this.state = {
  		option1: "", option2: "", option3: ""
  	};
  }

  editStateOptions(optionName, optionValue) {
  	var newState = {...this.state};
  	newState[optionName] = optionValue;
  	this.setState(newState);
  }

  render() {
    return (
        <OptionComponent/>
    );
  }
}

export default Search;
