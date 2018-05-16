import React, { Component } from 'react';
import logo from '../logo.svg';
import Tutorial from './Tutorial'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Документация React</h1>
        </header>
        <Tutorial/>
      </div>
    );
  }
}

export default App;
