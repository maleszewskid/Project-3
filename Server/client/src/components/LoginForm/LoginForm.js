import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LoginForm.css';

const LoginForm = props => {

    return (
        <Container className="loginForm card">
            <Row className="justify-content-md-center">
                <Col className='col-sm'></Col>
                <Col className='col-sm'>
                    <Row>
                        <Col className="col-12 text-center">
                            <div className="welcomeMsg">Login</div>
                        </Col>
                    </Row>
                    {/* User login form */}
                    <Col className="col-md-auto">
                        <Form className="form-login">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label></Form.Label>
                                <Form.Control onChange={props.onChange} name="username" type="username" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label></Form.Label>
                                <Form.Control onChange={props.onChange} name="password" type="password" placeholder="Password" />
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
                                <Col className='col-sm'>
                                    <Button onClick={props.onClick} className="loginSubmitBtn" type="submit" variant="success">Log in</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    {(props.error) ? <Row>
                        <Col className='loginError col-5 p-2 my-2 mx-auto text-center rounded'>
                            Login failure. Please try again.
                        </Col>
                    </Row> : null}
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
                                <Button className="createAccountBtn" variant="info">Sign up</Button>
                            </Link>
                        </Col>
                    </Row>
                    <br></br>
                    <hr></hr>
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


                </Col>

                <Col className='col-sm'></Col>

            </Row>
        </Container>
    )
}

export default LoginForm;






