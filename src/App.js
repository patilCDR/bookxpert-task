import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './jsx/components/Home/Home';
import About from './jsx/components/About/About';
import Services from './jsx/components/Services';
import Contact from './jsx/components/Contact';
import Header from './jsx/layouts/Header';
import Footer from './jsx/layouts/Footer';
import Blogs from './jsx/components/Blogs';
import Login from './jsx/components/Auth/Login';
import SignUp from './jsx/components/Auth/SignUp';

const App = () => {
  const { pathname } = window.location;

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setShowNav(pathname === '/login' || pathname === '/signup' ? false : true);
  }, []);

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/blog', element: <Blogs /> },
    { path: '/services', element: <Services /> },
    { path: '/contact', element: <Contact /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
  ];
  return (
    <>
      <BrowserRouter>
        {showNav && (
          <>
            <Header />
            <div style={{ height: '70px' }}></div>
          </>
        )}
        <Routes>
          {routes.map((route, i) => (
            <Route path={route?.path} index element={route?.element} key={i} />
          ))}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        {showNav && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
