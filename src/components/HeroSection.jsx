import { Container, Row, Col, Button } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">Soluciones digitales para tu negocio</h1>
            <p className="lead mb-4">
              Ofrecemos servicios de desarrollo web, marketing digital y más para ayudar a tu empresa a crecer en línea.
            </p>
            <Button variant="light" size="lg" className="me-3">
              Nuestros servicios
            </Button>
            <Button variant="outline-light" size="lg">
              Contactarnos
            </Button>
          </Col>
          <Col lg={6}>
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="Hero" 
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection