
import React from "react";
import { Form, Button, Row, Col, Container, Stack} from "react-bootstrap";
import { useContext, useState, handleSubmit } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContex';
import { User } from '../helpers/LocalStorage';

const EditUserInfoForm = () => {
  const navigate = useNavigate();
	const user = useContext(UserContext);
	const email = user.email;
	const [username, setUsername] = useState();
	// const [oldPassword, setOldPassword] = useState();
	// const [newPassword, setNewPassword] = useState();
	// const [confirmPassword, setConfirmPassword] = useState();
	const [message, setMessage] = useState('');

	const fetchData = (e) => {
		e.preventDefault();
		fetch('http://localhost:3001/user/change-profile', {
			method: 'PUT',
			body: JSON.stringify({
				username,
				email,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
    .then((res) => res.json())
    .then((res) => {
      console.info(res)
      console.info(message)
      if (!res.message) {
        setMessage(res.message);
      } else {
        User.setUser(res.data);

        navigate('/');
      }
    });
	};
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
						type="text"
						placeholder="username"
						value={user.username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				  </Form.Group>

              {(message==='') && (
                <Form.Group className="mx-3 mb-5">
                <Form.Text>{message}</Form.Text>
                </Form.Group>
              )}
              {/* <Button type="submit" varient="primary">
                Update
              </Button> */}
                <Stack gap={2} className="col-md-5 mx-auto">
                  <Button  type="submit" variant="secondary">Save changes</Button>
                  <Button button type="submit" onClick={navigate('/profile')} variant="outline-secondary">Cancel</Button>
                </Stack>
            </Form>
          </Col>
        </Row>
      </Container>
  )};
export default EditUserInfoForm;