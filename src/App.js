import React, { Component } from 'react';
import Portfolio from './Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pocket Music</h1>
        <h2>Pocket Operator Quick Start Guide</h2>
        <p>More content coming summer 2020; watch for updates and design improvements during 2020.</p>
        <Portfolio />
      </div>
    );
  }
}

export default App;
