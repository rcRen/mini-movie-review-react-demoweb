import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import EditProfileButton from "../components/EditProfileButton";
import MyReviewButton from "../components/MyReviewButton";
import Layout from "../layout/Layout";
import ReviewList from "../components/ReviewList";

const DisplayUserInfo = () => {
  return (
    <Layout>
      <Row>
        <Col md={{ span: 3, offset: 4 }}>
          <img src={"../images/person.png"} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <h1> Your Profile</h1>
        </Col>
        <Col md={{ span: 5, offset: 4 }}>
          <p>Name: User1</p>
          <p>Your Email: user1@gmail.com</p>
        </Col>
      </Row>
      <Row>
        <Col sm={4} />
        <Col sm={2}>
          <EditProfileButton />
        </Col>
        <Col sm={2}>
          <MyReviewButton />
        </Col>
        <Col sm={4} />
      </Row>
      {/* <Row>
        <ReviewList/>
      </Row> */}
    </Layout>
  );
};

export default DisplayUserInfo;
