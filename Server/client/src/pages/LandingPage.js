import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import LandingBody from '../components/LandingBody';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: '',
            username: ''
        }
    }

    getCurrentUsername = () => {
        
    }

    handleClick = (event) => {
        event.preventDefault();

        // logic: if input card is clicked redirect to '/Input'
        //        if view card is clicked redirect to '/viewData etc...
        this.setState({ redirectTo: '/Input' });

    }

    render = () => {

        switch (this.state.redirectTo) {
            case '/Input':
                return <Redirect to={{ pathname: this.state.redirectTo }} />;
            case '/viewData':
                return <Redirect to={{ pathname: this.state.redirectTo }} />;
            case '/submit':
                return <Redirect to={{ pathname: this.state.redirectTo }} />;
            default:
                return (
                    <div>
                        <Link
                            to="/Landing"
                            className={window.location.pathname === '/Landing'}
                        >
                        </Link>
                        <LandingHeader />
                        <LandingBody />
                        
                    </div>
                )
        }
    }
}

export default Landing;

