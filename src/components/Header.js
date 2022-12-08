import React, { useState } from "react";
import "../App.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { User } from "../helpers/LocalStorage";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButtton";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeButton from "./ThemeButton";
import AvatarIcon from "./AvatarIcon";
import SearchBar from "./SearchBar";

function Header() {
  const userInfo = User.getUser();
  return (
    <Navbar expand="lg" className="mx-3 my-3">
      <Container fluid>
        <ThemeButton />
        <Nav
          className="me-auto my-2 my-lg-3"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
		<SearchBar/>
        {userInfo ? (
          <>
            <AvatarIcon />
            <LogoutButton />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
