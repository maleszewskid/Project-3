import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';

// Custom Components
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount = () => {

    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input’s state
        this.setState({
            [name]: value
        });
        console.log(value);
    };

    // event handler for onclick of submit button in login form
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        API.Login( {
            username: this.state.username,
            password: this.state.password
        })
            // here -> redirect the user to the landing page
            .then(res => console.log(res.config))
            .catch(err => console.log(err)
        )
    }

    render = () => {
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
                />
            </div>
        )
    }
}

export default Login;
