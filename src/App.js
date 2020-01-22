import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rand from './Rand.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
            TRUTH OR DARE RANDOMIZER
        </h2>
        <div>
          <Rand></Rand>
        </div>
      </header>
      
    </div>
  );
}

export default App;
