import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import LoginHeader from '../components/LoginHeader';
import '../../src/assets/css/Signup.css';
// Import the API:
import API from '../utils/API.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth: '',
      sex: '',
      redirectTo: '',
      error: false,
      usernameTaken: false,
      userCreateFailure: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: false,
      usernameTaken: false
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if ((this.state.email.length > 0 && this.state.password.length > 0) && (this.state.password === this.state.confirmPassword)) {
      API.Signup({
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => {
          if (res.data.error) {
            this.setState({
              usernameTaken: true
            })
          } else {
            API.createUser({
              email: this.state.email,
              username: this.state.username,
              firstName: this.state.firstname,
              lastName: this.state.lastname,
              dateofBirth: this.state.dateofbirth,
              sex: this.state.sex
            })
              .then(res => {
                if (res.data.error) {
                  this.setState({
                    userCreateFailure: true
                  })
                } else {
                  this.setState({
                    redirectTo: '/Landing',
                    username: this.state.username
                  })
                }
              })
              .catch(err => {
                if (err) {
                  this.setState({
                    error: true
                  })
                }
              })
          }
        })
        .catch(err => {
          if (err) {
            this.setState({
              error: true
            })
          }
        })
    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo, state: { username: this.state.username } }} />
    } else {
      return (
        <div>
          <LoginHeader />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Container className="signup-container card">
            <Card.Title className='text-center'>Enter Your Information</Card.Title>
            <hr></hr>
            <br></br>
            <div className="Login">
              <Form onSubmit={this.handleSubmit}>
                <div className='row'>

                  <div className="col">
                    <Form.Group >
                      <Form.Control
                        name='username'
                        type="UserName"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="User Name"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        name='firstname'
                        type="Firstname"
                        value={this.state.fist}
                        onChange={this.handleChange}
                        placeholder="First Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        name='middlename'
                        type="MiddleInitial"
                        value={this.state.middle}
                        onChange={this.handleChange}
                        placeholder="Middle Initial"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        name='lastname'
                        type="lastname"
                        value={this.state.fist}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                      />
                    </Form.Group>
                  </div>
                  <div className="col">
                    <Form.Group>
                      <Form.Control
                        name='email'
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        type="password"
                        placeholder="Password"
                        className="form-control validate"
                        id="password"
                      />
                      {/* <div className="alert alert-warning password-alert" role="alert">

                        <ul>
                          <li className="requirements leng"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 8 chars.</li>
                          <li className="requirements big-letter"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 capital letter.</li>
                          <li className="requirements num"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 number.</li>
                          <li className="requirements special-char"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 special char.</li>
                        </ul>
                      </div> */}
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        placeholder="Confirm Password"
                        type="password"
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        className="form-control validate"
                        id="confirmPassword"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        name='dateofbirth'
                        value={this.state.DOB}
                        onChange={this.handleChange}
                        type="Date of birth"
                        placeholder="Data of birth as MM/DD/YYY"
                      />
                    </Form.Group>
                    {/* <Form.Group>
                      <select value={this.state.Sex} onChange={this.handleChange} name='sex'>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </Form.Group> */}
                  </div>
                </div>
                <div className='row'>
                  <div className='col'></div>
                  <div className='col'>
                    <Form>
                      {['radio'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check inline label="Male" type={type} id={`inline-${type}-1`} onChange={this.handleChange} />
                          <Form.Check inline label="Female" type={type} id={`inline-${type}-2`} onChange={this.handleChange}/>
                          {/* <Form.Check inline label="Other" type={type} id={`inline-${type}-3`} onChange={this.handleChange} /> */}
                        </div>
                      ))}
                    </Form>
                  </div>

                  <div className='col'></div>
                </div>

                <hr></hr>
                <br></br>

                <Row>
                  <Col className="col-12 text-center">
                  </Col>
                </Row>
                {(this.state.usernameTaken) ? <Row>
                  <Col className='error col-5 p-2 my-2 mx-auto text-center rounded'>
                    The username {this.state.username} is unavailable.
                        </Col>
                </Row> : null}
                {(this.state.userCreateFailure) ? <Row>
                  <Col className='error col-5 p-2 my-2 mx-auto text-center rounded'>
                    Could not create user. Contact Jack @ jack.jackryan@gmail.com
                        </Col>
                </Row> : null}
                {(this.state.error) ? <Row>
                  <Col className='error col-5 p-2 my-2 mx-auto text-center rounded'>
                    Whoops! Something went wrong. Contact Jack @ jack.jackryan@gmail.com
                        </Col>
                </Row> : null}
                {((this.state.password.length > 6) && (/\d/.test(this.state.password.toString()) && (this.state.confirmPassword === this.state.password))) ? <Row>
                  <Col className='good col-5 p-2 my-2 mx-auto text-center rounded'>
                    Your password is strong.
              </Col>
                </Row> : null}
                {((this.state.password.length < 6 || !/\d/.test(this.state.password.toString()))) ? <Row>
                  <Col className='error col-5 p-2 my-2 mx-auto text-center rounded'>
                    Your password is not strong enough.
              </Col>
                </Row> : null}
                {((this.state.confirmPassword.length > 0) && (this.state.password !== this.state.confirmPassword)) ? <Row>
                  <Col className='error col-5 p-2 my-2 mx-auto text-center rounded'>
                    Your passwords don't match!
  
              </Col>
                </Row> : null}
                <Button
                  block
                  type="submit"
                  className="btn btn-success signup-button"
                  onClick={this.handleFormSubmit}
                >
                  Sign Up
                </Button>
                <br></br>

              </Form>
            </div>

          </Container>
        </div >
      );
    }
  }
}
