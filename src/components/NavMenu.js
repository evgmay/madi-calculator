import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function NavMenu() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <Container>
        <Navbar.Brand href="/">Калькулятор калорий</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-md-5">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/about">О нас</Nav.Link>
            <NavDropdown title="Информация" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.github.com">Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.vercel.com">Vercel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/calculator">Калькулятор</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
