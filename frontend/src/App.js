import React, { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import TotalOrdersPage from './Pages/TotalOrdersPage';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import apiKey from './utils/apiKey';
import Footer from './Components/Footer';

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`

function App() {
   
  return (
    
    <div className="App">
      
        {/* <FeaturedProducts /> */}
        {/* <Sale items /> */}
    <ToastContainer />    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/total" element={<TotalOrdersPage />} />
      </Routes>
    

      <Footer />
    </div>
  );
}

export default App;
