import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


import './LoginForm.css';

const LoginForm = props => {
    return (
        <Container className="loginForm">
            <Row className="justify-content-md-center">
                <Col>
                    <Row>
                        <Col className="col-12 text-center">
                            <div className="welcomeMsg">To continue, log in to patientFirst</div>
                        </Col>
                    </Row>
                    {/* User login form */}
                    <Col className="col-md-auto">
                        <Form className="form-login">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="username" placeholder="Enter address or username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    {/* Remember me checkbox */}
                                    <div key={`default-checkbox`} className="mb-3 checkboxDiv">
                                        <Form.Check
                                            type={`checkbox`}
                                            id={`Remember-me`}
                                            label={`Remember me`}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <Button className="loginSubmitBtn" variant="success">Log in</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <br></br>
                    <Row>
                        <Col className="col-12 text-center">
                            <div>
                                <Link
                                to="/Resetpassword"
                                className={window.location.pathname === "/Resetpassword"}
                                >
                                    <div className="forgotPwd">Forgot you password?</div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <Col className="col-md-auto">
                        <hr>
                        </hr>
                    </Col>
                    <br></br>
                    <Row>
                        <Col className="col-12 text-center">
                            <div className="hasAccount">Don't have an account?</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-auto createAccount">
                            <Link
                                to="/Signup"
                                className={window.location.pathname === "/Signup"}
                            >
                                <Button className="createAccountBtn" variant="success">Sign up for patientFirst</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;





