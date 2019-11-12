import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/cards/Main';
import './styling/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Game Center</h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
