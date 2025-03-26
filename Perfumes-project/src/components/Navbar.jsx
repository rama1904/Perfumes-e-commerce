import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from "./Cartwidget";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Perfume Store</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#perfumes">Perfumes</Nav.Link>
        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;
