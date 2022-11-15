import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/feedback';
import Added from './components/pages/Added';
import Signin from './components/pages/signin';

// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Contact/>} />
          <Route path="/added" element={<Added/>}></Route>
          <Route path="/admin" element={<Signin/>}></Route>
          {/* <Route path='/contact' component={Contact} /> */}
          
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
