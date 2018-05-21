import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import header from './Header.js';
import GoldMadness from './GoldMadness';
import Ad from './Ad';
import Clickbait from './Clickbait';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        
        <body>
          {React.createElement(header)}
    <main className="expanded row">
      {React.createElement(GoldMadness)}
      {React.createElement(Ad)}

      {React.createElement(Clickbait)}
    </main>

    {React.createElement(Footer)}

    
  </body>
      </div>
      
    );
  }
}


export default App;
