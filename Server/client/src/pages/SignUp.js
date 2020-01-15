import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LoginHeader from '../components/LoginHeader';
//import '../signup';
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
      firstname: "",
      middlename: "",
      lastname: "",
      dateofbirth: '',
      sex: '',
      redirectTo: '',
      error: false
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      API.Signup({
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => {
          if (res.data.error) {
            this.setState({
              error: true
            })
          }
        })
        .catch(err => this.setState({
          error: true
        }))
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
              error: true
            })
          } else {
            this.setState({
              redirectTo: '/Landing',
              username: this.state.username
            })
          }
        })
        .catch(err => this.setState({
          error: true
        }))
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div>USERNAME TAKEN MODAL</div>
      )
    } else if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo, state: { username: this.state.username } }} />
    } else {
      return (
        <div className="Login">
          <LoginHeader />
          <br></br>
          <br></br>
          <Form onSubmit={this.handleSubmit}>
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
                <div className="alert alert-warning password-alert" role="alert">

                  <ul>
                    <li className="requirements leng"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 8 chars.</li>
                    <li className="requirements big-letter"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 capital letter.</li>
                    <li className="requirements num"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 number.</li>
                    <li className="requirements special-char"><i className="fas fa-check green-text"></i><i className="fas fa-times red-text"></i> Your password must have at least 1 special char.</li>
                  </ul>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  placeholder="Confirm Password"
                  value={this.state.confrimPassword}
                  onChange={this.handleChange}
                  type="confirmPassword"
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
              <Form.Group>
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
              onClick={this.handleFormSubmit}
            >
              Sign Up
          </Button>
          </Form>
        </div>
      );
    }
  }
}
// var pass = document.getElementByClassName("btn.success");
// pass.onclick = function passwordChecker() {
//   if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
//     window.location.replace("")
//   }
//   else {
//     alert("Password does not match")
//     document.getElementById('confirmPassword').style.color = 'red'
//     document.getElementById('password').style.color = 'red'
//     // window.scrollTo(300, 500)
//   }
// }
