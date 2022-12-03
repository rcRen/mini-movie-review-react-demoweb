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

const Sidebar = () => {

    return (
        <div class="sidebar">
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>
                    Welcome to MoNVie!
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/home" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/popular" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="th-large">Popular</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend1" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="sticky-note">Recommend 1</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend2" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="sticky-note">Recommend 2</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/recommend3" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="sticky-note">Recommend 3</CDBSidebarMenuItem>
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