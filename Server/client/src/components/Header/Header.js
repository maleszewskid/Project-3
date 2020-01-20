import React from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';

const Header = (props) => {
    const { username } = props.user;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center fixed-top">
            <p className="p-2 m-0 headerTitle"><i className="fa fa-heartbeat 2x"></i>PatientFirst</p>
            <div className="p-2 m-0 headerUsername">{props.user.username}</div>
                <Link className="nav-link ml-auto" to={{ pathname: "/Landing", state: { username } }}>Home</Link>
                <Link className="nav-link" to={{ pathname: "/DataEntry", state: { username } }}>Add Data</Link>
                <Link className="nav-link" to={{ pathname: "/viewData", state: { username } }}>View Data</Link>
                <Link className="nav-link" to={{ pathname: "/submit", state: { username } }}>Send Data</Link>
        </nav>
    )
}

export default Header;