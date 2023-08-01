import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import TotalOrdersPage from './Pages/TotalOrdersPage';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import logo from './logo.svg'; 
import './App.css';
import Header from './Components/Header';
import Description from './Components/Description';
import axios from 'axios';
import apiKey from './utils/apiKey';
import DataFetching from './utils/DataFetching';

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`

function App() {
    
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/total" element={<TotalOrdersPage />} />
      </Routes>
      {/* <DataFetching /> */}
    </div>
  );
}

export default App;
