import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { Link } from "react-router-dom";

function ReviewList() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || "1234"
  );

  const fetchData = () => {
    fetch("http://localhost:3001/commandreviews/get", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  });

  const handleSubmit = (recordId) => {
    // e.preventDefault();
    alert(recordId);
    console.log({ recordId });
    fetch("http://localhost:3001/commandreviews/" + recordId, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));

    try {
      navigate("/myreview", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Movie Id</th>
            <th>User Id</th>
            <th>Username</th>
            <th>Rate</th>
            <th>Content</th>
            <th>Update Date</th>
            <th>Action</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.movieId}</td>
              <td>{item.userId}</td>
              <td>{item.username}</td>
              <td>{item.rate}</td>
              <td>{item.content}</td>
              <td>{moment(item.updateDate).format("DD-MM-YYYY hh:mm:ss a")}</td>
              <td>
                <Link to={"/edit/" + item._id}>Edit</Link>
                <Button
                  variant="primary"
                  value={item._id}
                  onClick={(e) => handleSubmit(e.target.value)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewList;
