import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import Header from "../Header/Header";

function NavScrollExample() {
  return (
    <>
      <Navbar className="contenedor-nav"  expand="lg">
        <Container fluid>
      <Header />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="link" href="#">Inicio</Nav.Link>
              <Nav.Link className="link" href="#">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavScrollExample;
