import React from "react";
import "./UserPage.css";
import {Container} from "react-bootstrap";
import DisplayUserInfo from "../components/DisplayUserInfo";

const UserPage = () => {

  return (
   <Container>
    <DisplayUserInfo />
    </Container>
  );
};

export default UserPage;