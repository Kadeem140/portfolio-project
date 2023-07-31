import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { useState } from 'react';
import '../../src/Components/Description.css'
import "../../src/Components/Description.css"

const Description = ( ) => {
    return (
        <div className="container">
            <Row className="container">
                <Col sm='6'>
                    <p>
                        Test Description here
                    </p>   
                </Col>
                <Col sm='6'>
                    <img 
                        className="container"
                        src='https://images.unsplash.com/photo-1604846887565-640d2f52d564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'
                        alt='Console Controllers'
                        
                    / > 
                </Col>
            </Row>
        </div>  

        
    )
};

export default Description