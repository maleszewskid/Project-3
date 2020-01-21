import React, { Component } from 'react';	
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

    render = () => {	
        const username = this.props.location.state;	
        return (	
            <div>	
                <LandingHeader user={username} />	
                <LandingBody user={username} />	
            </div>	
        )	
    }	
}	

export default Landing;