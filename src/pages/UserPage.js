import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import ReviewList from "../components/ReviewList";
import Layout from "../layout/Layout";
import "./UserPage.css";

const UserPage = () => {
  return (
    <Layout>
      <Row className="profilePic">
        <Col md={{ span: 3, offset: 6 }}>
          <img src={'../images/person.png'} />
        </Col>
      </Row>
      <Row className="profileContainer">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="pic">
              <Form.Label>Change Profile Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Col>
        <Col md={{ span: 3, offset: 5 }}>
          <Button type="submit" varient="primary">
            Update
          </Button>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Col>
      </Row>
      </Layout>
  );
};

export default UserPage;
