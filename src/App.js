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
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3';


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
        <div className='main' style={{ height: '100%' }}>
          <Routes>
            <Route path="/" element={<MovieHome />} />
            <Route path="/popular" element={<MoviePopular />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
            <Route path="/movie1" element={<Movie1 />} />
            <Route path="/movie2" element={<Movie2 />} />
            <Route path="/movie3" element={<Movie3 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
