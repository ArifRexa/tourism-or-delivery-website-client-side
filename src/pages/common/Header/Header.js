import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, Offcanvas, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar bg="primary" expand={false} >
                <Container fluid>
                    <Navbar.Brand as = {Link} to="/home">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as = {Link} to="/home">Home</Nav.Link>
                                <Nav.Link as = {Link} to="/rides">Rides</Nav.Link>
                                {
                                    user.email&& 
                                    <div>
                                        <Nav.Link as = {Link} to="/myorders">My Orders</Nav.Link>
                                        <Nav.Link as = {Link} to="/manageorders">Manage All Bookings</Nav.Link>
                                        <Nav.Link as = {Link} to="/addservices">Add a New Feature</Nav.Link>
                                    </div>
                                }
                                {
                                    !user.email ?
                                    <Nav.Link as = {Link} to="/login">Login</Nav.Link>: < >
                                    <Nav.Link as={Link} to="/home" onClick={logOut} > Log Out</Nav.Link>
                                    <Nav.Link as={Link} to="/login" >Signed as: {user.displayName}</Nav.Link>
                                </>
                                }
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;