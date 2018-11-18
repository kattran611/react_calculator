import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  contructor() {
    super();

    this.stat = {
      result: ""
    }
  }
  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeyPadComponent onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
