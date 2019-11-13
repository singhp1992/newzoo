import React, { Component } from 'react';
import Header from './components/Header';
import Main2 from './components/cards/Main2';
// import Main3 from './components/cards/Main3';

import './styling/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main2 />
      </div>
    );
  }
}

export default App;
