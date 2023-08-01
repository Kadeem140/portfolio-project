import React, {useState, useEffect} from 'react'
import { Col, Row, Container, Card, CardBody, CardHeader} from "reactstrap";
import Header from '../Components/Header';

const AboutPage = () => {
    return (
        <div>
            <Header />
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
        </div>
      
       
    )
}

export default AboutPage;