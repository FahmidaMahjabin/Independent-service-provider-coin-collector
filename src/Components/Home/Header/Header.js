import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from "../../../images/Background.png";
import auth from '../../../init';
const Header = () => {
    const [user] = useAuthState(auth);
    console.log("user from header:", user)
    // function = log out
    const getLoggedOut = () =>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand to="/">
                    
                    <img src = {logo} alt = "logo"></img>
                    <span className='ms-2'>My Currency World</span>
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
                        {user? <button class = "btn btn-link text-white" type = "button" onClick={getLoggedOut} >Log Out</button>:
                        <Nav.Link as = {Link}  to="/logIn">LogIn</Nav.Link>

                        }
                        
                        
                        {/* <Nav.Link as = {Link}  to="/services">Services</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;