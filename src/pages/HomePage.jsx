import { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const HomePage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar expand="lg" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <img 
              src="https://via.placeholder.com/150x50?text=BAQ.EC" 
              alt="Logo" 
              height="40"
            />
          </Navbar.Brand>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline-primary" 
            className="d-lg-none"
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>

          {/* Desktop menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="mx-2 active">Inicio</Nav.Link>
              <Nav.Link href="#" className="mx-2">Nosotros</Nav.Link>
              <div className="nav-item dropdown mx-2">
                <Nav.Link href="#" className="dropdown-toggle" role="button">
                  Servicios <FiChevronDown className="ms-1" />
                </Nav.Link>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Diseño Web</a>
                  <a className="dropdown-item" href="#">Marketing Digital</a>
                  <a className="dropdown-item" href="#">Desarrollo de Software</a>
                </div>
              </div>
              <Nav.Link href="#" className="mx-2">Portafolio</Nav.Link>
              <Nav.Link href="#" className="mx-2">Contacto</Nav.Link>
            </Nav>
            <Button variant="primary" className="ms-3">Cotizar ahora</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={showMobileMenu} onHide={toggleMobileMenu} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="mb-2">Inicio</Nav.Link>
            <Nav.Link href="#" className="mb-2">Nosotros</Nav.Link>
            <div className="nav-item dropdown mb-2">
              <Nav.Link href="#" className="dropdown-toggle" role="button">
                Servicios <FiChevronDown className="ms-1" />
              </Nav.Link>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Diseño Web</a>
                <a className="dropdown-item" href="#">Marketing Digital</a>
                <a className="dropdown-item" href="#">Desarrollo de Software</a>
              </div>
            </div>
            <Nav.Link href="#" className="mb-2">Portafolio</Nav.Link>
            <Nav.Link href="#" className="mb-2">Contacto</Nav.Link>
            <Button variant="primary" className="mt-3">Cotizar ahora</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Hero Section */}
      <section className="hero-section py-5 bg-light">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Soluciones digitales para tu negocio</h1>
              <p className="lead mb-4">
                Creamos experiencias digitales impactantes que ayudan a tu marca a destacar en el mundo online.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="primary" size="lg">Nuestros servicios</Button>
                <Button variant="outline-primary" size="lg">Contactar ahora</Button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://via.placeholder.com/600x400?text=Hero+Image" 
                alt="Hero" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nuestros Servicios</h2>
            <p className="text-muted">Ofrecemos soluciones completas para tu presencia digital</p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: '🖥️',
                title: 'Diseño Web',
                description: 'Sitios web modernos y responsivos que se adaptan a todos los dispositivos'
              },
              {
                icon: '📱',
                title: 'Apps Móviles',
                description: 'Aplicaciones nativas e híbridas para iOS y Android'
              },
              {
                icon: '📈',
                title: 'Marketing Digital',
                description: 'Estrategias para aumentar tu presencia online y generar leads'
              },
              {
                icon: '🛒',
                title: 'E-commerce',
                description: 'Tiendas online completas con sistemas de pago integrados'
              }
            ].map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="display-4 mb-3">{service.icon}</div>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    <a href="#" className="btn btn-link text-primary text-decoration-none">
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="lead mb-4">Contáctanos hoy mismo y descubre cómo podemos ayudarte</p>
          <Button variant="light" size="lg">Solicitar consulta gratuita</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <Container>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img 
                src="https://via.placeholder.com/150x50?text=BAQ.EC" 
                alt="Logo" 
                height="40"
                className="mb-3"
              />
              <p>Somos una agencia digital comprometida con el éxito de nuestros clientes.</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Inicio</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Nosotros</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Servicios</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contacto</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contacto</h5>
              <address>
                <p>Av. Principal 123, Guayaquil</p>
                <p>Email: info@baq.ec</p>
                <p>Teléfono: +593 99 999 9999</p>
              </address>
            </div>
            <div className="col-lg-3 mb-4">
              <h5>Redes Sociales</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin fs-4"></i></a>
                <a href="#" className="text-white"><i className="bi bi-whatsapp fs-4"></i></a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BAQ.EC. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;