import React from 'react';
import './LandingHeader.css';

const LandingHeader = props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            
            <p className="p-2 m-0 headerTitle"><i className="fa fa-heartbeat 2x"></i>PatientFirst</p>
            <div className="p-2 m-0 headerUsername">props.username</div>
            
        </nav>
    )
}

export default LandingHeader;