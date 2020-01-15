import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LoginHeader from '../components/LoginHeader'
// import '../signup';
import '../Signup.css';
// Import the API:
import API from '../utils/API.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      API.Signup({
        // email: this.state.email,
        username: this.state.username, 
        password: this.state.password,
        // first: this.state.first,
        // middle: this.state.middle,
        // last: this.state.last,
      })
      .catch(err => console.log(err))
    }
  }


  render() {
    return (
      <div className="Login">
        <LoginHeader />
        <br></br>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <div className="col">
          <Form.Group controlId="User Name">
              <Form.Control
                type="UserName"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="User Name"
              />
            </Form.Group>

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
                className="form-control validate"
                id="password"
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
                id="confirmPassword"
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
            className="btn btn-success"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

/* var pass = document.getElementByClassName("btn.success");
pass.onclick = function passwordChecker () {
    if(document.getElementById("password").value === document.getElementById("confirmPassword").value){
        window.location.replace("")
    }
    else{
        alert("Password does not match")
        document.getElementById('confirmPassword').style.color = 'red'
        document.getElementById('password').style.color = 'red'
        // window.scrollTo(300, 500)
    }
} */