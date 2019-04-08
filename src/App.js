import React, { Component } from 'react';

import './App.css';
import  GenerateSimpsonsQuote  from  './Components/GenerateSimpsonsQuote/GenerateSimpsonsQuote';
import  DisplaySimpsonsQuote  from  './Components/DisplaySimpsonsQuote/DisplaySimpsonsQuote';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:  sampleQuote
  };
} 
getQuote() {
  // Récupération de l'employé via fetch
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=1")
    .then(response  =>  response.json())
    .then(data  => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        quote:  data[0],
      });
  });
}

  render() {
    return (
      
        <div>
        <GenerateSimpsonsQuote selectQuote={() =>  this.getQuote()}  />
        <DisplaySimpsonsQuote exemple={this.state.quote} />
        </div>
      
    );
  }
}

const  sampleQuote = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
 };




export default App;
