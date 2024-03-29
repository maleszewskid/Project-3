import React from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';
import '../../App.css'
import FontAwesome from 'react-fontawesome'
import API from '../../utils/API';

const Header = (props) => {

    const handleClick = event => {
        API.Logout().then(() => {
            
        });
    }

    const { username } = props.user;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

            <Link to={{ pathname: "/Landing", state: { username } }}>
                <p className="p-2 m-0 headerTitle"><i className="fa fa-heartbeat 2x"></i>PatientFirst</p>
            </Link>
            <div className="p-2 m-0 headerUsernameHead">{props.user.username}</div>
            <div className="dropdown dropleft">
                <button className="dropbtn">
                <FontAwesome className='fas fa-bars' />
                </button>
                <div className="dropdown-content">
                    <Link className="nav-link dropdown-item" to={{ pathname: "/DataEntry", state: { username } }}>Enter</Link>
                    <Link className="nav-link dropdown-item" to={{ pathname: "/viewData", state: { username } }}>View</Link>
                    <Link className="nav-link dropdown-item" to={{ pathname: "/submit", state: { username } }}>Submit</Link>
                    {/* Here we need to send a request to logout user from DB */}
                    <Link className="nav-link dropdown-item ml-auto" onClick={() => handleClick()} to={{ pathname: "/", state: { username: "" } }}>Logout</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;