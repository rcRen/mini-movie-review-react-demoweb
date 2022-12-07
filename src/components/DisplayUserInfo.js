import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EditProfile from "./EditProfile";
import MyReviewButton from "./MyReviewButton";

const DisplayUserInfo = () => {

  return (

    <Container>
        <Row>
          <Col md={{ span: 3, offset: 4 }}>
          <img src={require('../images/person.png')} />
          </Col>
        </Row>
        <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <h1> Your Profile</h1>
        </Col>
        <Col md={{ span: 5, offset:4}}>
          <p>Name: User1</p>
          <p>Your Email: user1@gmail.com</p>
        </Col>

        </Row>
        <Row>
        <Col  sm={4}/>
        <Col  sm={2}>
          <EditProfile />
        </Col>
        <Col sm={2}>
          <MyReviewButton />
        </Col>
        <Col  sm={4}/>
        </Row>

    </Container>
  );
};

export default DisplayUserInfo;