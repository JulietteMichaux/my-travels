import React, { Component } from 'react';

import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       <Travels/>
        </header>
      </div>
    );
  }
}


export default App;
