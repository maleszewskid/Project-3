import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import API from '../utils/API';

// Custom Components
import ResetPassword from '../components/ResetPassword'


class Reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            redirectTo: null,
            reset: false
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

    
    // Add handle submit function here
    // On submit we should call an API function to update the userCreds database
    // with the users updated password
    // ResetPassword component will then re-route to /Landing page

    
    render = () => {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo, state: {username: this.state.username} }} />
        } else {
            return (
                <div>
                    <Link
                        to="/Resetpassword"
                        className={window.location.pathname === "/Resetpassword"}
                        >
                    </Link>
                    <ResetPassword
                        onChange={this.handleInputChange}
                        onClick={this.handleSubmit}
                        error={this.state.error}
                    />
                </div>
            )
        }
    }
}

export default Reset;