import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav, NavbarBrand, Container } from "reactstrap";
export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Gift Cards</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add Cards
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
