import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <Travel
          destination="Monasterio di Piedra"
          country="Spain"
          photo="http://viajes.elmundo.es/imagenes/2015/10/27/espana/1445941498_0.jpg"
          distance="877"
       />
       <Travel
          destination="Bari"
          country="Italie"
          photo="https://images.salaun-holidays.com/(Image)-image-italie-bari-02-as_157581524.jpg"
          distance="1986"
       />
    </div>
        </header>
      </div>
    );
  }
}


export default App;
