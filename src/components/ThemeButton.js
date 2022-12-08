import React, { useState, useEffect } from "react";
import LightIcon from "../images/LightIcon.jpg";
import DarkIcon from "../images/DarkIcon.jpg";

function ThemeButton() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className={`App ${theme}`}>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <p>Toggle Theme</p>
        {theme === "light" ? (
          <img
            alt=""
            src={DarkIcon}
            className="d-flex 
    justify-content-start m-3"
            width={"70px"}
            style={{ cursor: "pointer" }}
            id="movie"
            onClick={() => toggleTheme()}
          />
        ) : (
          <img
            alt=""
            src={LightIcon}
            className="d-flex 
  justify-content-start m-3"
            id="movie"
            width={"70px"}
            style={{ cursor: "pointer" }}
            onClick={() => toggleTheme()}
          />
        )}
      </div>
    </>
  );
}
export default ThemeButton;
