import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyButton from "./UI/MyButton";

function AddReviewForm() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [inputContent, setInputContent] = useState();
  const [inputRate, setInputRate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({
        email: inputEmail,
        username: inputUsername,
        password: inputPassword,
        comfirmpassword: inputComfirmPassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        // (json.success? alert('Registration sucessful') : alert(JSON.stringify(json)));
        setErrorMsg(json.errorMsg);
        setPwdErrMsg(json.pwdErrMsg);
        setEmailErrMsg(json.emailErrMsg);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className='mb-5'>
          <Form.Text>{errorMsg}</Form.Text>
        </Form.Group> */}
        <Form.Group className="my-3 mx-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="content"
            value={inputContent}
            onChange={(e) => {
              setInputContent(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-5 mx-3">
          <Form.Control
            type="text"
            placeholder="rate"
            value={inputRate}
            onChange={(e) => {
              setInputRate(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mx-3"
          style={{ width: "100px", float: "right" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddReviewForm;
