import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../signup';

export default class FirstTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first: "",
      middle: "",
      last:"",

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

  render() {
    return (
      <div className="Login">

        <Form onSubmit={this.handleSubmit}>

          <div className="col">

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

          <div className="col">

            <Form.Group controlId="email">
              <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
              <div className="alert alert-warning password-alert" role="alert">
              <ul>
                <li className="requirements leng"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 8 chars.</li>
                <li className="requirements big-letter"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 capital letter.</li>
                <li className="requirements num"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 number.</li>
                <li className="requirements special-char"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 special char.</li>
              </ul>
            </div>
              </Form.Group>

              <Form.Group controlId="Confirm">

                <Form.Control
                  placeholder="Confirm Password"
                  value={this.state.confrimPassword}
                  onChange={this.handleChange}
                  type="confirmPassword"
                />
              </Form.Group>

            <Form.Group controlId="DOB">

              <Form.Control
                value={this.state.DOB}
                onChange={this.handleChange}
                type="Date of birth"
                placeholder="MM/DD/YYY"

              />
            </Form.Group>
            <Form.Group controlId="Sex">

              <select value={this.state.Sex} onChange={this.handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Form.Group>

          </div>

          <Button
            block

            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}