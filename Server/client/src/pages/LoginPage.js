import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import LoginHeader from '../components/LoginHeader';
import LoginForm from '../components/LoginForm';

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

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            loginField: value
        })
        console.log(value);
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
                <LoginForm />
            </div>
        )
    }
}

export default Login;
