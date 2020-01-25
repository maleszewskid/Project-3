import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './EmailForm.css';

const Email = (props) => {

    return (
        <Container>
            <Row>

                <Col className="col-md-12 d-flex justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Button className="emailSend" type="submit" variant="primary">Send Email</Button>   
                </Col>
            </Row>
        </Container>
    )
}

export default Email;