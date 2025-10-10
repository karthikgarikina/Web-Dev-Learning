import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './Contact';
// import Home from './Home';

// import Cards from './Cards';
// import CardDetails from './CardDetails';

// import ForFiles from './ForFiles';

import { useState } from 'react';
import Store from './Store';
import Page1 from './page1';
import Page2 from './page2';
function App() {
  const [Count,setCount]=useState(0);
  return (
    // <BrowserRouter>
    //    <Routes>
    //        <Route path="/contact" element={<Contact/>}/>
    //        <Route path="/" element={<Home/>}/>
    //    </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Cards/>}/>
    //       <Route path="/card-details/:id" element={<CardDetails/>}/>
    //     </Routes>
    // </BrowserRouter>

    // <ForFiles/>


    <Store.Provider value={{Count,setCount}}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Page1/>}/>  
              <Route path="/page2" element={<Page2/>}/> 
          </Routes>
      </BrowserRouter>
    </Store.Provider>

    
  );
}

export default App;
