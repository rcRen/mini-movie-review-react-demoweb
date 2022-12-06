import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import './Sidebar.css';

function Sidebar() {

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='nav-menu active'>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="/" className="menu-bars">
                                <img src="logo.png" alt="logo" id="logo"></img>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <hr style={{ width: "80%"}}></hr>
                        <p style={{ fontSize: '15px', 
                                    color: 'white' }}>Copyright &copy;  Team BK
                        </p>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;