import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovieHome from './pages/MovieHome';
import MoviePopular from './pages/MoviePopular';
import About from './pages/About';
import Movie1 from './pages/Movie1';

import RegisterLoginPage from './pages/RegisterLoginPage';

function App() {

  return (
    // <div>
    //   <RegisterLoginPage/>
    // </div>
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MovieHome />} />
          <Route path="/popular" element={<MoviePopular />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
          <Route path="/movie1" element={<Movie1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
