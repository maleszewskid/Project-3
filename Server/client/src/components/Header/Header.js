import React from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';
import '../../App.css'

const Header = (props) => {
    const { username } = props.user;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center fixed-top">

            <Link to={{ pathname: "/Landing", state: { username } }}>
                <p className="p-2 m-0 headerTitle"><i className="fa fa-heartbeat 2x"></i>PatientFirst</p>
            </Link>
            <div className="p-2 m-0 headerUsername">{props.user.username}</div>
            <div className='col'>
                <div className='row'>
                    {/* <Link className="nav-link ml-auto" to={{ pathname: "/Landing", state: { username } }}>Home</Link> */}
                    <Link className="nav-link" to={{ pathname: "/DataEntry", state: { username } }}>Add Data</Link>
                    <Link className="nav-link" to={{ pathname: "/viewData", state: { username } }}>View Data</Link>
                    <Link className="nav-link" to={{ pathname: "/submit", state: { username } }}>Send Data</Link>
                </div>
            </div>

            <ul className='navbar-nav ml-auto'>
                <li className='navbar-nav ml-auto'><a id='logout'>Logout</a></li>
            </ul>
        </nav>

    )
}

export default Header;