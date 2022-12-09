import React from "react";
import { Form, Button, Row, Col, Container, Stack} from "react-bootstrap";
import { useContext, useState, handleSubmit } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContex';
import CancelButton from "./CancelButton";
import MyButton from "./UI/MyButton";

const EditUserInfoForm = () => {
  const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
	const [username, setUsername] = useState();
  const [data, setData] = useState([]);
	// const [oldPassword, setOldPassword] = useState();
	// const [newPassword, setNewPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	const [message, setMessage] = useState('');

	const fetchData = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/user/change-profile', {
			method: 'PUT',
			body: JSON.stringify({
				email: email,
        username: username
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 5 }}>
          <img src={'../images/person.png'} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <h1>Edit your information</h1>
        </Col>
      </Row>
       <Row>
          <Col md={{ span: 6, offset: 4 }}>
    
            <Form onSubmit={handleSubmit}>
            
              <div><h3>Your logged Email is {email}</h3></div>
            
              <Form.Group className="mb-5 mx-3" controlId="formBasicPassword">
                <Form.Control
                type="username"
                placeholder="username"
                value={"xiaoming8"}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}>
                </Form.Control>
				      </Form.Group>

              {(message==='') && (
                <Form.Group className="mx-3 mb-5">
                <Form.Text>{message}</Form.Text>
                </Form.Group>
              )}

                <Stack gap={2} className="col-md-5 mx-auto">
                  <Button  type="submit" variant="secondary">Save changes</Button>
                  <MyButton><CancelButton /></MyButton>
                </Stack>
            </Form>
            
          </Col>
        </Row>
      </Container>
    
  )};
export default EditUserInfoForm;