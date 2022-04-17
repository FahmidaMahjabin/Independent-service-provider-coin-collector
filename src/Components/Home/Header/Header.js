import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/Background.png";
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand to="#home">
                    <img src = {logo} alt = "logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to="/">Home</Nav.Link>
                        <Nav.Link as = {Link} to="/about">About</Nav.Link>
                        <Nav.Link as = {Link} to="/Blogs">Blogs</Nav.Link>
                        <Nav.Link as = {Link}  to="/services">Services</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        
                        <Nav.Link as = {Link}  to="/logIn">LogIn</Nav.Link>
                        {/* <Nav.Link as = {Link}  to="/services">Services</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;