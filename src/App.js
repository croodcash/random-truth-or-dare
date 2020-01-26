import React from 'react';
import logo from './bca.png';
import './App.css';
import Rand from './Rand.js';
function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="title">
            TRUTH OR DARE RANDOMIZER
        </h2>
        <Rand className="rand"/>
        <p>© GSIT-DTM 2020</p>
      </div>
    </div>
  );
}

export default App;
