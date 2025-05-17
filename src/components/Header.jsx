import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          BAQ.EC Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <Button variant="primary" className="ms-3">
            Cotizar ahora
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header