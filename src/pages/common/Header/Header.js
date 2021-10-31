import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="warning" expand={false} fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home" className="text-light fw-bold">KBO PARK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/home"><i className="fas fa-home"></i> Home</Nav.Link>
                                <Nav.Link as={Link} to="/rides"><i className="fas fa-biking"></i> Rides</Nav.Link>
                                {
                                    user.email &&
                                    <div>
                                        <Nav.Link as={Link} to="/myorders"><i className="fas fa-bookmark"></i> My Orders</Nav.Link>
                                        <Nav.Link as={Link} to="/manageorders"><i className="fas fa-tasks"></i> Manage All Bookings</Nav.Link>
                                        <Nav.Link as={Link} to="/addservices"><i className="fas fa-puzzle-piece"></i> Add a New Feature</Nav.Link>
                                    </div>
                                }
                                {
                                    !user.email ?
                                        <Nav.Link as={Link} to="/login"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link> : < >
                                            <Nav.Link as={Link} to="/home" onClick={logOut} ><i className="fas fa-sign-out-alt"></i> Log Out</Nav.Link>
                                            <Nav.Link as={Link} to="/login" ><i className="fas fa-user-tie"></i> Signed as: {user.displayName}</Nav.Link>
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