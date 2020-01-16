import React from 'react';
import './Header.css';

const Header = props => {
    console.log(props);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center fixed-top">
            
            <p className="p-2 m-0 headerTitle"><i className="fa fa-heartbeat 2x"></i>PatientFirst</p>
            <div className="p-2 m-0 headerUsername">{props.user.username}</div>
            
        </nav>
    )
}

export default Header;