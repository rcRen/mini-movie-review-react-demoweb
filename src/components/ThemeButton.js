import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import * as GiIcons from 'react-icons/gi';

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
        <GiIcons.GiCardExchange
          style={{
            color: 'black',
            width: '50px',
            height: '28px',
            backgroundColor: 'beige',
          }}
          onClick={toggleTheme} />
      </div>
    </>
  );
}
export default ThemeButton;
