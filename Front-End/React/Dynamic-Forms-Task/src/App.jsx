import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import View from './View';
import Store from './Store';
import { useState } from 'react';

function App() {
  const [cards,setCards]=useState([]);
  return (
    <Store.Provider value={{cards,setCards}}> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/view' element={<View/>} />
        </Routes>
      </BrowserRouter>
    </Store.Provider> 
  )
}

export default App
