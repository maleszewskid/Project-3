import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    handleClick = (event) => {
        event.preventDefault();

        // logic: if input card is clicked redirect to '/Input'
        //        if view card is clicked redirect to '/viewData etc...
        this.setState({ redirectTo: '/Input' });

    }

    render = () => {
        const username = this.props.location.state;
        return (
            <div>
                <Link
                    to="/Landing"
                    className={window.location.pathname === '/Landing'}
                >
                </Link>
                <LandingHeader user={username} />
                <LandingBody user={username} />

            </div>
        )
    }
}

export default Landing;

