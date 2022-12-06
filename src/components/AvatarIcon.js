import React from "react";
import "./AvatarIcon.css";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function AvatarIcon() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/UserPage", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <Button style={{backgroundColor:"white",backgroundSize:"cover"}}onClick={handleSubmit}>
        <img src="./images/person.png" width="30" height="30" alt=""/>
      </Button>
    </div>
  );

}

export default AvatarIcon;