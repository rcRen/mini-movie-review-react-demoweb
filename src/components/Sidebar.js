import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <div class="sidebar">
            <CDBSidebar textColor="#fff" backgroundColor="rgba(0,0,0,0.6)">
                <CDBSidebarHeader>
                    Welcome to MoNVie!
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/home" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/popular" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="th-large">Popular</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend1" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="sticky-note">Recommend 1</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend2" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="sticky-note">Recommend 2</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend3" className={({ isActive }) =>
                            isActive ? "link-active" : "link-inactive"
                        }><CDBSidebarMenuItem icon="sticky-note">Recommend 3</CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Copyright &copy; MoNVie
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;