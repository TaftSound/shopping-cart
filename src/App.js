import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ShopPage from './components/shop-page';
import Homepage from './components/homepage';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/shopping-cart'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
