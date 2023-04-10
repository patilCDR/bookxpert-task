import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';

function OffcanvasExample() {
  const location = useLocation();
  const { pathname } = location;
  console.log(
    '🚀 ~ file: Header.js:14 ~ OffcanvasExample ~ pathname:',
    pathname,
    pathname === '/',
    `nav-link ${pathname === '/' ? 'active' : ''}`
  );
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar bg='white' expand='md' expanded={expanded} fixed='top'>
        <Container>
          <Navbar.Brand href='#'>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <img
                src='http://www.bookxpert.co.in/assets/img/logo.png'
                alt=''
                style={{ width: '100px' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={() => setExpanded(true)}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement='end'
          >
            <Offcanvas.Header closeButton onClick={() => setExpanded(false)}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Bookxpert</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/' onClick={() => setExpanded(false)}>
                  {/* <Link to='/' className={`nav-link active`}> */}
                  <Link to='/home' className={`nav-link ${pathname === '/home' && 'active'}`}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href='' onClick={() => setExpanded(false)}>
                  <Link to='/about' className={`nav-link ${pathname === '/about' && 'active'}`}>
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link href='' onClick={() => setExpanded(false)}>
                  <Link to='/blog' className={`nav-link ${pathname === '/blog' && 'active'}`}>
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link href='' onClick={() => setExpanded(false)}>
                  <Link
                    to='/contact'
                    className={`nav-link ${pathname === '/services' && 'active'}`}
                  >
                    Services
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
