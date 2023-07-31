import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Description from './Components/Description';
import axios from 'axios';
// import APIKEY from './utils/APIKEY';
import apiKey from './utils/apiKey';

function App() {
  const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`
    
    useEffect = (() => {
        axios.get(url)
        .then(response => response.json())
        .then(response => {
          console.log(response, "API get call response")
        })
    }, []);
    
  return (
    
    <div className="App">
    <Header />
    <Description />
    {/* <FeaturedProducts /> */}
    {/* <Sale items /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
