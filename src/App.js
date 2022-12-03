import './App.css';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
import MovieHome from './pages/MovieHome';
import MovieUpcoming from './pages/MovieUpcoming';
import About from './pages/About';
// import Profile from './pages/Profile';
import Recommend1 from './pages/Recommend1';
import Recommend2 from './pages/Recommend2';
import Recommend3 from './pages/Recommend3';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div class="main" className="container">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<MovieHome />} />
            <Route path="/upcoming" element={<MovieUpcoming />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/recommend1" element={<Recommend1 />} />
            <Route path="/recommend2" element={<Recommend2 />} />
            <Route path="/recommend3" element={<Recommend3 />} />

          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
