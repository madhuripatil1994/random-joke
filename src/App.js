import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Containers/main-container/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
