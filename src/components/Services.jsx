import { Container, Row, Col, Card } from 'react-bootstrap'
import { FiCode, FiShoppingCart, FiBarChart2, FiSmartphone } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: <FiCode size={48} />,
      title: "Desarrollo Web",
      description: "Creación de sitios web profesionales y aplicaciones web a medida."
    },
    {
      icon: <FiShoppingCart size={48} />,
      title: "E-commerce",
      description: "Soluciones completas para tiendas en línea y sistemas de pago."
    },
    {
      icon: <FiBarChart2 size={48} />,
      title: "Marketing Digital",
      description: "Estrategias para aumentar tu presencia en línea y generar leads."
    },
    {
      icon: <FiSmartphone size={48} />,
      title: "Aplicaciones Móviles",
      description: "Desarrollo de apps nativas e híbridas para iOS y Android."
    }
  ]

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Nuestros Servicios</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services