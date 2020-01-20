import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand col" to="/Search">
                <h5>Patient First</h5>
            </Link>

            <div>
                <ul className="navbar-nav col">
                    <li className="nav-item">
                        <Link
                            to="/SignUp"
                            className={window.location.pathname === "/SignUp" || window.location.pathname === "/SignUp"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            <p className="m-0">New User</p>
                        </Link>
                    </li>
                </ul>
            </div>


            <div style={{ paddingLeft: 15 }}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/Login"
                            className={window.location.pathname === "/Login" || window.location.pathname === "/Login"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            <p className="m-0">Existing User</p>
                        </Link>

                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;