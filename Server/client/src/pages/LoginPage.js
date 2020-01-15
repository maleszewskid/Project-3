import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../utils/API';

// Custom Components
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm/LoginForm'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            redirectTo: null,
            loggedIn: null
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input’s state
        this.setState({
            [name]: value
        });
    };

    // event handler for onclick of submit button in login form
    handleSubmit = event => {
        event.preventDefault();
        let userInfo = {
            username: this.state.username,
            password: this.state.password,
            error: false
        }
        API.Login(userInfo)
            // here -> redirect the user to the landing page
            .then(res => {
                // Need to have this redirect to the main page:
                if (res.status === 200) {
                    // Set the redirect route:
                    this.setState({
                        redirectTo: '/Landing',
                        loggedIn: true,
                        username: res.data.username
                    })
                } else {
                    this.setState({
                        error: true
                    })
                }
            })
            .catch(err => this.setState({
                error: true
            })
            )
    }

    render = () => {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo, state: {username: this.state.username} }} />
        } else {
            return (
                <div>
                    <Link
                        to="/Login"
                        className={window.location.pathname === "/Login"}
                        >
                    </Link>
                    <LoginHeader />
                    <LoginForm
                        onChange={this.handleInputChange}
                        onClick={this.handleSubmit}
                        error={this.state.error}
                    />
                </div>
            )
        }
    }
}

export default Login;
