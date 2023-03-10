import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "../Styles/Header.css"


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
              <div className="Link-menu">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/Contacto"}>Contacto</Link>

              </div>
              
              
       
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavScrollExample;
