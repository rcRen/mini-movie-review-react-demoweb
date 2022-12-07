import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { User } from '../helpers/LocalStorage';


import './Sidebar.css';

function Sidebar() {
	const userInfo = User.getUser();
    return (
        <>
            <nav className='nav-menu'>
                <ul>
                    <li className="navbar-button">
                        <Link to="/">
                            <img src="../logo.png" alt="logo" id="logo"></img>
                        </Link>
                    </li>
                    <li className="navbar-button">
                        <Link to="/" >
                            <Button variant='outline-info' className="nav-text">
                                Home
                            </Button>
                        </Link>
                    </li>
                    {userInfo?(<li className="navbar-button">
                        <Link to="/profile" >
                            <Button variant='outline-info' className="nav-text">
                                Profile
                            </Button>
                        </Link>
                    </li>):null}
                    <li className="navbar-button">
                        <Link to="/popular">
                            <Button variant='outline-info' className="nav-text">
                                Popular
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-button">
                        <Link to="/about">
                            <Button variant='outline-info' className="nav-text">
                                About
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-button">
                        <Link to="/movie1">
                            <Button className="nav-text" style={{ backgroundImage: "url('../naruto.png')", backgroundSize: "cover" }}>
                                &nbsp;
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-button">
                        <Link to="/movie2">
                            <Button className="nav-text" style={{ backgroundImage: "url('../mulholland_drive.jpeg')", backgroundSize: "cover" }}>
                                &nbsp;
                            </Button>
                        </Link>
                    </li>
                    <li className="navbar-button">
                        <Link to="/movie3">
                            <Button className="nav-text" style={{ backgroundImage: "url('../avatar.jpg')", backgroundSize: "cover" }}>
                                &nbsp;
                            </Button>
                        </Link>
                    </li>
                    <hr style={{ width: "70%" }}></hr>
                    <p style={{
                        fontSize: '1vw',
                        color: 'beige'
                    }}>Copyright &copy;  Team BK
                    </p>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar;