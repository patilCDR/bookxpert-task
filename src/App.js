import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './jsx/components/Home/Home';
import About from './jsx/components/About';
import Services from './jsx/components/Services';
import Contact from './jsx/components/Contact';
import Header from './jsx/layouts/Header';
import Footer from './jsx/layouts/Footer';
import Blogs from './jsx/components/Blogs';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ height: '70px' }}></div>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='about' index element={<About />} />
          <Route path='services' index element={<Services />} />
          <Route path='blog' index element={<Blogs />} />
          <Route path='contact' index element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
