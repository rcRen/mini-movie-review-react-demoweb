import React from "react";
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
      <img src="person.png" alt="img" size="35" height="35" width="35" />
      </Button>
    </div>
  );

}

export default AvatarIcon;