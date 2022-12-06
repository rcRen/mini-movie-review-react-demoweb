import { useEffect, useState } from "react";

function ReviewList() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3001/CommentRecord`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
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
