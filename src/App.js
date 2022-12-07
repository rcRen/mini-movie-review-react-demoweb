import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MovieHome from "./pages/MovieHome";
import MoviePopular from "./pages/MoviePopular";
import About from "./pages/About";
import MyReview from "./pages/MyReview";
// import Profile from './pages/Profile';
import AddReview from "./pages/AddReview";
import EditReviewForm from "./components/EditReviewForm";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Movie1 from './pages/Movie1';
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3';
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
          <AddReviewButton />
          <MyReviewButton />
          {/* <Navbar /> */}
          <div class="main" className="container">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<MovieHome />} />
              <Route path="/popular" element={<MoviePopular />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
              <Route path="/movie1" element={<Movie1 />} />
            <Route path="/movie2" element={<Movie2 />} />
            <Route path="/movie3" element={<Movie3 />} />
              <Route path="/addreview" element={<AddReview />} />
              <Route path="/myreview" element={<MyReview />} />
              <Route path="/searchhome" element={<SearchHome />} />
              <Route path="/edit/:id" element={<EditReviewForm />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;