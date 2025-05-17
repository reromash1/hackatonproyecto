import { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas, Row, Col, Card } from 'react-bootstrap';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const HomePage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar expand="lg" className="py-3 bg-white shadow-sm">
        <Container>
          <Navbar.Brand href="#">
            <span className="fw-bold fs-3">Banco de ALIMENTOS <small className="d-block">Quito</small></span>
          </Navbar.Brand>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline-warning" 
            className="d-lg-none border-0"
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>

          {/* Desktop menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#inicio" className="mx-2 active">Inicio</Nav.Link>
              <Nav.Link href="#nosotros" className="mx-2">Nosotros</Nav.Link>
              <Nav.Link href="#impacto" className="mx-2">Impacto</Nav.Link>
              <Nav.Link href="#proceso" className="mx-2">Proceso</Nav.Link>
              <Nav.Link href="#contacto" className="mx-2">Contacto</Nav.Link>
              <Button variant="warning" className="ms-3 text-white">Donar ahora</Button>
            </Nav>
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
            <Nav.Link href="#inicio" className="mb-2">Inicio</Nav.Link>
            <Nav.Link href="#nosotros" className="mb-2">Nosotros</Nav.Link>
            <Nav.Link href="#impacto" className="mb-2">Impacto</Nav.Link>
            <Nav.Link href="#proceso" className="mb-2">Proceso</Nav.Link>
            <Nav.Link href="#contacto" className="mb-2">Contacto</Nav.Link>
            <Button variant="warning" className="mt-3 text-white">Donar ahora</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Hero Section */}
      <section id="inicio" className="hero-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">¿QUIERES DONAR ALIMENTOS?</h1>
              <h2 className="h3 mb-3">¿QUIERES DONAR DINERO?</h2>
              <h2 className="h3 mb-4">¿QUIERES SER VOLUNTARIO?</h2>
              <div className="d-flex flex-wrap gap-3">
                <Button variant="warning" size="lg" className="text-white">Donar alimentos</Button>
                <Button variant="outline-warning" size="lg">Ser voluntario</Button>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="https://img.europapress.es/fotoweb/fotonoticia_20161125191701_690.jpg" 
                alt="Banco de Alimentos Quito" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="nosotros" className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">¿Qué hace el Banco de Alimentos Quito?</h2>
              <p className="lead">
                El Banco de Alimentos Quito lucha contra el hambre y la desnutrición, rescatamos alimento y lo distribuimos en donación a personas vulnerables mediante un sistema de gestión certificado que garantiza trazabilidad y nos permite ser un aliado estratégico en materia de responsabilidad social empresarial.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Impacto Alcanzado</h2>
          <Row className="g-4 text-center">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-warning">130,919,469</h3>
                  <p className="fw-bold">COMIDA</p>
                  <small className="text-muted">(2003–2024)</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-warning">149</h3>
                  <p className="fw-bold">Organizaciones Sociales Atendidas</p>
                  <small className="text-muted">(2024)</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-warning">38,167,550</h3>
                  <p className="fw-bold">Kilos Entregados</p>
                  <small className="text-muted">(2003 – 2024)</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-warning">+82,973</h3>
                  <p className="fw-bold">Personas beneficiadas</p>
                  <small className="text-muted">(C/Mes)</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-5">¿Qué hace el BAQ para luchar contra el hambre?</h2>
          <Row className="g-4">
            {[
              {
                title: 'RESCATE DE ALIMENTO',
                description: 'Recuperamos alimentos que serían desperdiciados pero que son perfectamente aptos para el consumo.'
              },
              {
                title: 'CLASIFICACIÓN Y ALMACENAMIENTO',
                description: 'Procesamos y almacenamos los alimentos bajo estrictos controles de calidad.'
              },
              {
                title: 'DISTRIBUCIÓN',
                description: 'Entregamos los alimentos a organizaciones sociales que atienden a población vulnerable.'
              },
              {
                title: 'TRAZABILIDAD',
                description: 'Garantizamos un sistema de gestión certificado que permite seguir todo el proceso.'
              }
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="text-warning">{item.title}</h4>
                    <p>{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-5 bg-warning text-white">
        <Container className="text-center">
          <h2 className="fw-bold mb-4">¡Únete a nuestra causa!</h2>
          <p className="lead mb-4">Cada aporte cuenta en la lucha contra el hambre en Quito</p>
          <Button variant="light" size="lg" className="me-3">Donar ahora</Button>
          <Button variant="outline-light" size="lg">Ser voluntario</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h3 className="fw-bold">Banco de ALIMENTOS <small className="d-block">Quito</small></h3>
              <p className="mt-3">Luchando contra el hambre y la desnutrición en nuestra ciudad.</p>
            </Col>
            <Col lg={2} md={6} className="mb-4">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#inicio" className="text-white text-decoration-none">Inicio</a></li>
                <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none">Nosotros</a></li>
                <li className="mb-2"><a href="#impacto" className="text-white text-decoration-none">Impacto</a></li>
                <li className="mb-2"><a href="#contacto" className="text-white text-decoration-none">Contacto</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h5>Contacto</h5>
              <address>
                <p>Quito, Ecuador</p>
                <p>Email: info@baq.org.ec</p>
                <p>Teléfono: +593 2 123 4567</p>
              </address>
            </Col>
            <Col lg={3} className="mb-4">
              <h5>Síguenos</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Banco de Alimentos Quito. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;