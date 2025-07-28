import "../css/Recommendation.css"
import { useLocation } from 'react-router-dom';
import bikes from '../data/BikesData.json';
import { Container, Row, Col, Card } from 'react-bootstrap';



function Recommendation() {
    const location = useLocation();
    const { ridingStyle, licence, budget } = location.state || {};
    //const favorites = state.favorites || [];

    if (!location.state) {
        return <Col xs={12} className="results-empty">
            <h2>No results found</h2>
            <p>Please fill out the information needed and meet your bike.</p>
        </Col>
    }

    const results = bikes.filter(
        bike =>
            bike.type.toLowerCase() === ridingStyle.toLowerCase() &&
            bike.price <= Number(budget) &&
            bike.licence.toLowerCase() === licence.toLowerCase()
    );

    return (
        <Container>
            <Row className="gx-4 gy-4 justify-content-center align-items-center results-container">
                {results.length > 0 ? (results.map((bike) => (
                    <Col key={bike.name} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={bike.image} />
                            <Card.Body>
                                <Card.Title>{bike.name}</Card.Title>
                                <Card.Text>
                                    Type: {bike.type}
                                    <br />
                                    Licence: {bike.licence}
                                    <br />
                                    Price: {bike.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                ) : (
                    <Col xs={12}>
                        <h2>No results found</h2>
                        <p>Try adjusting your search criteria.</p>
                    </Col>)}
            </Row>
        </Container>
    )
}

export default Recommendation