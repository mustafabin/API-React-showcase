import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const NavbarFunc = () => {
  return (
    <Navbar fixed="top" bg="light" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>API-Showcase</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Divider />
              <NavDropdown.Item>Country Api</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Bored</NavDropdown.Item>
              <NavDropdown.Item>Dad Jokes</NavDropdown.Item>
              <NavDropdown.Item>Noise Colors</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFunc;
