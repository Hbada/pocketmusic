import React, { Component } from 'react';
import Portfolio from './Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pocket Music</h1>
        <h2>Pocket Operator Quick Start Guide</h2>
        <Portfolio />
      </div>
    );
  }
}

export default App;
