import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Sidebar.css';

function Sidebar() {

    return (
        <>
            <nav className='nav-menu active'>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="/" className="menu-bars">
                            <img src="logo.png" alt="logo" id="logo"></img>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/" >
                            <Button variant='outline-info' className="nav-text">
                                Home
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/popular">
                            <Button variant='outline-info' className="nav-text">
                                Popular
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/about">
                            <Button variant='outline-info' className="nav-text">
                                About
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/movie1">
                            <Button variant='outline-info' className="nav-text">
                                Recommend1
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/movie2">
                            <Button variant='outline-info' className="nav-text">
                                Recommend2
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-toggle">
                        <Link to="/movie3">
                            <Button variant='outline-info' className="nav-text">
                                Recommend3
                            </Button>
                        </Link>
                    </li>
                    <hr style={{ width: "80%" }}></hr>
                    <p style={{
                        fontSize: '1vw',
                        color: 'white'
                    }}>Copyright &copy;  Team BK
                    </p>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar;