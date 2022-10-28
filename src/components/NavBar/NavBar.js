import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from './LogoNavBar';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="nav" variant="dark">
      <Container>
      <LogoNavBar/>
        <Navbar.Brand as={Link} to='/'>
              Mundo tech
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/category/Movilidad-Urbana'>Movilidad Urbana</Nav.Link>
          <Nav.Link as={Link} to='/category/Smartwatches'>Smartwatches</Nav.Link>
          <Nav.Link as={Link} to='/category/Smartphones'>Smartphones</Nav.Link>
          <Nav.Link as={Link} to='/category/Tablets'>Tablets</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;