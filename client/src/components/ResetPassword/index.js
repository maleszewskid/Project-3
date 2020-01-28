import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginHeader from '../LoginHeader'
import './ResetPassword.css';

const Resetpassword = props => {

    return (
        <div>
            <LoginHeader />
            <Container className="resetForm">
                <Row className="justify-content-md-center">
                    <Col>
                        <Row>
                            <Col className="col-12 text-center">
                                <div className="resetMsg">Password Reset</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-12 text-center">
                                <div className="resetSubMsg">Reset your PatientFirst password below</div>
                            </Col>
                        </Row>
                        {/* User login form */}
                        <Col className="col-md-auto">
                            <Form className="reset-form-login">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control onChange={props.onChange} name="oldpassword" type="password" placeholder="Old password" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label></Form.Label>
                                    <Form.Control onChange={props.onChange} name="newpassword" type="password" placeholder="New password" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                    <Link
                                        to="/Landing"
                                        className={window.location.pathname === "/Landing"}
                                        >
                                        <Button onClick={props.onClick} className="ResetBtn" variant="success">Reset Password</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        {(props.error) ? <Row>
                            <Col className='resetError col-5 p-2 my-2 mx-auto text-center rounded'>
                                Password was not reset. Please try again.
                        </Col>
                        </Row> : null}
                        <br></br>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Resetpassword;






