import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";



const EditUserInfoForm = () => {

  return (
    <Container>
      <Row>
      <Col md={{ span: 6, offset: 4 }}>
        <h1>Edit your information</h1>
        </Col>
        </Row>

       <Row >
          <Col md={{ span: 6, offset: 4 }}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                ></Form.Control>
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
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
  )};
export default EditUserInfoForm;