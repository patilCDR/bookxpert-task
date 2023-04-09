import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      <Navbar bg='white' expand='md'>
        <Container>
          <Navbar.Brand href='#'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <img
                src='http://www.bookxpert.co.in/assets/img/logo.png'
                alt=''
                style={{ width: '100px' }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/'>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href=''>
                  <Link to='/contact' className='nav-link'>
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link href=''>
                  <Link to='/contact' className='nav-link'>
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
