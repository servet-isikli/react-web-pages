import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
    const navigate = useNavigate();

    return (
        <Navbar
            bg="light"
            expand="lg"
            onSelect={(eventKey) =>
                eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
            }
        >
            <Container>
                <Navbar.Brand>
                    <Nav.Link eventKey="home">
                        <img src={logo} alt="" />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link eventKey="about">About</Nav.Link>
                        <Nav.Link eventKey="instructors">Instructors</Nav.Link>
                        <Nav.Link eventKey="contact">Contact</Nav.Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="developing">
                                Full-Stack Developing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="data-science">
                                Data Science
                            </NavDropdown.Item>
                            <NavDropdown.Item href="devops">AWS DevOps</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
