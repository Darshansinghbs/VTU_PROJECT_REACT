import React from "react";
import {Navbar, Nav, NavDropdown, Container, Image} from 'react-bootstrap';

const Header = () => {
    return(
        <header>
        <Navbar className="navbar-style" expand="lg">
        <Container>
        <Navbar.Brand href="#"><Image className="logo-img-style" src='IMAGES/vtulogo.jpeg' alt="VTU" roundedCircle/>
        <h6 className="logo-text-style">Visvesvaraya Technological University, Belgavi</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Academic" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Circulars and Notification</NavDropdown.Item>
        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        <NavDropdown.Item href="#">Certification issue</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Examination" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
        <NavDropdown.Item href="#">Application</NavDropdown.Item>
        <NavDropdown.Item href="#">Results</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Civil ENGG</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Science and ENGG</NavDropdown.Item>
        <NavDropdown.Item href="#">Electronics and Communication ENGG</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item> 
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
    )
}

export default Header;