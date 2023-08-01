import React, {useState, useEffect} from 'react'
import { Col, Row, Container, Card, CardBody, CardHeader} from "reactstrap";


const AboutPage = () => {
    return (
        <Container>
            <Row className="row-content">
                <Col sm='6'>
                    <h3>My Mission for Game Store</h3>
                    <p>
                        We want to make browsing for and shopping for your favorite videogames,
                        appliances and consoles easier than ever. We provide to you a curated database of
                        all the electoronics at our disposal to fit your entertainment needs
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;