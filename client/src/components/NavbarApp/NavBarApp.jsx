import React, { useContext } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io"
import avatarDefault from "../../../public/images/appImages/avatarDefault.png";

import { AppContext } from "../../context/AppProvider";
import "/public/styles/navbar/navbarStyle.scss";


export const NavBarApp = () => {
  const navigate = useNavigate();
  const { user, isLogged } = useContext(AppContext);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarApp p-0"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="ps-3 mb-0 d-flex gap-2 align-items-center p-0 flex-fill flex-lg-grow-0"
        >
          {/* <GiBookshelf className="fs-2" /> */}{" "}
          <img src="/images/appImages/logobg.png" alt="" className="logo" />{" "}
          <div>
            Night<span>Owl</span> Reads{" "}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className="order-2"/>
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
              {user?.type === 0 && (
                <>
                  <Nav.Link as={Link} to="/user">
                    My Profile
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
                </>
              )}
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {isLogged ? (
          <Dropdown  drop="down"  align={"end"} className="avatarCont order-1" focusFirstItemOnShow={false}
          >
            
            <Dropdown.Toggle className="avatar"
              
              
              >
              
                <img
                  src={
                    user?.profile_img
                    ? `http://localhost:4000/images/user/${user?.profile_img}`
                      : avatarDefault
                    }
                  alt="avatar"
                  />
         
              
            </Dropdown.Toggle>
            <Dropdown.Menu 
            className="avatarMenu"
            >
            <Dropdown.Item  className="item" as={Link} to= {`/userEdition/${user?.user_id}`} >
            <IoMdSettings/> Settings
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item as={Link} to="/user"  className="item"  >My profile</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item className="item" href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <>
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
          </>
        )}
      </Container>
    </Navbar>
  );
};
