import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MovieHome from "./pages/MovieHome";
import MoviePopular from "./pages/MoviePopular";
import About from "./pages/About";
import MyReview from "./pages/MyReview";
// import Profile from './pages/Profile';
import Recommend1 from "./pages/Recommend1";
import Recommend2 from "./pages/Recommend2";
import Recommend3 from "./pages/Recommend3";
import AddReview from "./pages/AddReview";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterLoginPage from "./pages/RegisterLoginPage";
import { StarRating } from "./components/StarRating";
import AddReviewButton from "./components/AddReviewButton";
import MyReviewButton from "./components/MyReviewButton";
import SearchHome from "./pages/SearchHome";

function App() {
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
        <Router>
          <Header />
          <button onClick={toggleTheme}>Toggle Theme</button>
          <StarRating />

          <AddReviewButton />
          {/* <MyReviewButton /> */}
          <Navbar />
          <div class="main" className="container">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<MovieHome />} />
              <Route path="/popular" element={<MoviePopular />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
              <Route path="/recommend1" element={<Recommend1 />} />
              <Route path="/recommend2" element={<Recommend2 />} />
              <Route path="/recommend3" element={<Recommend3 />} />
              <Route path="/addreview" element={<AddReview />} />
              <Route path="/myreview" element={<MyReview />} />
              <Route path="/searchhome" element={<SearchHome />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
