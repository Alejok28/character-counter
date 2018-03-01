import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  updateValue(e) {
    this.setState({
      value: e.target.value.length
    })
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateValue.bind(this)}></textarea>
        <div className="counter">{this.state.value}</div>
      </div>
    );
  }
}

export default App;
