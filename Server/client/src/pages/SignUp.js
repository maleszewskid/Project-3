import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import '../signup';
import PasswordField from '../components/PasswordStrength/PasswordField';
import Birthdate from '../components/Birthdate'


export default class FirstTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first: "",
      middle: "",
      last: "",
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  // passwordChanged = this.fieldStateChanged('password')

  render() {
    return (
      <div className="Login">
        <div className="contianer">


            <Form onSubmit={this.handleSubmit}>
          <div className="row">
              <div className="col-6">
                <Form.Group controlId="First Name">
                  <Form.Control
                    type="Firstname"
                    value={this.state.fist}
                    onChange={this.handleChange}
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group controlId="Middle Initial">
                  <Form.Control
                    type="MiddleInitial"
                    value={this.state.middle}
                    onChange={this.handleChange}
                    placeholder="Middle Initial"
                  />
                </Form.Group>
                <Form.Group controlId="Last Name">
                  <Form.Control
                    type="Lastname"
                    value={this.state.fist}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                  />
                </Form.Group>
              </div>


              <div className="col-6">
                <Form.Group controlId="email">
                  <Form.Control
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </Form.Group>
                <PasswordField fieldId="password" placeholder="Enter Password" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />

                <Form.Group controlId="Confirm">
                  <Form.Control
                    placeholder="Confirm Password"
                    value={this.state.confrimPassword}
                    onChange={this.handleChange}
                    type="confirmPassword"
                  />
                </Form.Group>
             
              </div>

          </div>
            </Form>
        </div>
        
        <Birthdate />
                <Form.Group controlId="Sex">
                  <select value={this.state.Sex} onChange={this.handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Form.Group>
        <Button
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
          </Button>
      </div>


    );
  }
}