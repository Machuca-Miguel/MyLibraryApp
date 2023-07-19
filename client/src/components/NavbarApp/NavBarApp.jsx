import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";

import "../../../public/styles/navbar/navbarStyle.scss";

export const NavBarApp = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarApp"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="ps-3 mb-0 d-flex gap-2 align-items-center"
        >
         <GiBookshelf className="fs-2" /> My Library 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          bg="dark"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              My Library <GiBookshelf className="mb-2" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 ps-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/allBooks">
                All books
              </Nav.Link>
              <NavDropdown
                title="My Bookshelves"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item as={Link} to="#action3">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item as={Link} to="#action3">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex gap-2">
              {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}

              <Button variant="none" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button
                variant="outline-light"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
