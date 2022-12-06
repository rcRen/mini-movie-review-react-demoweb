import React, { useState, useEffect } from "react";
import "../App.css";
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
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <tbody>
        <tr>
          <th>MovieId</th>
          <th>userId</th>
          <th>username</th>
          <th>Rate</th>
          <th>Content</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.movieId}</td>
            <td>{item.userId}</td>
            <td>{item.username}</td>
            <td>{item.rate}</td>
            <td>{item.content}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default ReviewList;
