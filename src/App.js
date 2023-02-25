import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Shop from './components/shop-page';
import Homepage from './components/homepage';
import NavBar from './components/navbar';

// components: NavBar, Homepage, ShoppingCart
// two routes: Homepage and ShoppingCart

// navbar on both pages, in this App.js file we are only going to
// set up the routing and create the context to pass through the app

// use "useContext" for practice

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
