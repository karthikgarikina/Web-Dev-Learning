import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './Contact';
// import Home from './Home';

// import Cards from './Cards';
// import CardDetails from './CardDetails';

import ForFiles from './ForFiles';

function App() {
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
    <ForFiles/>

    
  )
}

export default App
