import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavbarPartial() {
  return (
    <Navbar bg="light" expand="lg" className="d-flex flex-column">
      <Container fluid className='me-2 ms-2'>
        <Navbar.Brand ><Link to="/user/home" style={{textDecoration: 'none', color: 'black'}}>HealthTech</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/pacientes'>Pacientes</Nav.Link>
          </Nav>
          <NavDropdown id="basic-nav-dropdown" className='d-flex ms-auto' align={{lg:'end'}} menuVariant='dark' style={{color:'black'}}>
            <NavDropdown.Item href="#action/3.1">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Separated link</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logoff</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPartial