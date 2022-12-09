import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { User } from "../helpers/LocalStorage";

function AddReviewButton() {
  const userInfo = User.getUser();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    userInfo
      ? navigate("/addreview", { replace: true })
      : navigate("/identity#login", { replace: true });
    // try {
    //   navigate("/addreview", { replace: true });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      {/* <div style={{ flexDirection: "row", direction: "rtl" }}></div> */}
      {/* <button onClick={handleSubmit}>Home</button> */}
      {/* <Button variant="primary" onClick={handleSubmit}> */}
      <Button variant="primary" onClick={handleSubmit}>
        Add Review
      </Button>
    </div>
  );
}
export default AddReviewButton;
