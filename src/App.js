import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePage from './pages/MoviePage';
import Popular from './pages/Popular';
import Profile from './pages/Profile';
import Recommend1 from './pages/Recommend1';
import Recommend2 from './pages/Recommend2';
import Recommend3 from './pages/Recommend3';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div class="container">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<MoviePage />} />
        <Route path="popular" element={<Popular />} />
        <Route path="profile" element={<Profile />} />
        <Route path="recommend1" element={<Recommend1 />} />
        <Route path="recommend2" element={<Recommend2 />} />
        <Route path="recommend3" element={<Recommend3 />} />
        {/* If route not found -> can inside/outside the Route loop */}
        <Route path="*" element={<p>Invalid URL</p>} />
      </Routes>

    </div>
  );
}

export default App;
