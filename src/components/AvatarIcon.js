import React from "react";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function AvatarIcon() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <Button style={{backgroundColor:"white",backgroundSize:"cover", borderRadius:'45%'}} onClick={handleSubmit}>
      <img src={"../images/person.png"} alt="img" size="20" height="20" width="20" />
      </Button>
    </div>
  );

}

export default AvatarIcon;