import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
      <Button variant="outline-warning" onClick={toggleTheme}>
        <GiIcons.GiCardExchange style={{ width: '20px', height: '20px' }} />
      </Button>
    </>
  );
}
export default ThemeButton;
