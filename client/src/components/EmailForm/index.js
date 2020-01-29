import React , { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './EmailForm.css';
import API from '../../utils/API';

const Email = (props) => {

    const [emailSent, setEmailSent] = useState('false');    
    const [emailInput, setEmailInput] = useState({'emailAddress': ''});
    const getEmailInput = (event) => {
        const { name, value } = event.target;
        setEmailInput({'emailAddress': value});
    }
    
    const sendEmailAddress = (event) => {
        event.preventDefault();
        API.sendEmail(emailInput, props.data)
            .then(res => {
                setEmailSent('true')
            })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <Row>
                <Col className="col-md-12 d-flex justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={(event) => getEmailInput(event)} type="email" placeholder="Email address" />
                    </Form.Group>
                    <Button onClick={(event) => sendEmailAddress(event)} className="emailSend" type="submit" variant="primary">Send Email</Button>   
                </Col>
                <Col className="col-md-12 d-flex justify-content-center">
                     {(emailSent=== 'true') ? <div className="emailSent"><strong>Email sent!</strong></div> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Email;