
// import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar';
import MovieHome from './pages/MovieHome';
import MoviePopular from './pages/MoviePopular';
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
      {/* <div>
      <RegisterForm/>
      <LoginForm/>
    </div> */}
      <Header />
      <Router>
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
