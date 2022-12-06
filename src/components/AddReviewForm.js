import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { NavDropdown } from "react-bootstrap";
import { format } from "date-fns";

function AddReviewForm() {
  // const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [movieId, setMovieId] = useState(
    localStorage.getItem("movieId") || "307463"
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || "1234"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "user1"
  );
  const [inputContentText, setInputContentText] = useState();
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  // Optional callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const [updateDate, setUpdateDate] = useState();
  useEffect(() => {
    setUpdateDate(moment().format("DD-MM-YYYY hh:mm:ss a"));
  }, []);
  console.log(updateDate);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/addreview", {
      method: "POST",
      body: JSON.stringify({
        movieId: movieId,
        userId: userId,
        username: username,
        updateDate: updateDate,
        rate: rating,
        // content: [
        //   {
        //     contentText: inputContentText,
        //   },
        // ],
        content: inputContentText,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success
          ? alert("Add Review Successful")
          : alert(JSON.stringify(json));
      });
  };

  return (
    <>
      <div className="App">
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          initialValue={rating}
          ratingValue={rating}
          /* Available Props */
        />
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group className='mb-5'>
          <Form.Text>{errorMsg}</Form.Text>
        </Form.Group> */}
          <Form.Group className="my-3 mx-3" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Content Text"
              value={inputContentText}
              onChange={(e) => {
                setInputContentText(e.target.value);
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
    </>
  );
}

export default AddReviewForm;
