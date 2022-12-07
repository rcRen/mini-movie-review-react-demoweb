import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieHome from "./pages/MovieHome";
import MoviePopular from "./pages/MoviePopular";
import About from "./pages/About";
import Movie1 from "./pages/Movie1";
import Movie2 from "./pages/Movie2";
import Movie3 from "./pages/Movie3";
import IdentityPage from "./pages/Identity";
import UserProvider from "./contexts/UserContex";
import UpdatePassword from "./pages/UpdatePassword";
import DisplayMoviePage from "./pages/DisplayMoviePage";
import UserPage from "./pages/UserPage";
import EditReviewForm from './components/EditReviewForm';
import MyReview from './pages/MyReview';
import AddReview from './pages/AddReview';
import { StarRating } from './components/StarRating';


function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'light'
	);
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.className = theme;
	}, [theme]);
  return (
    <>
      <UserProvider>
        <Router>
          <div class="main">
            <Routes>
              <Route path="/" element={<MovieHome />} />
              <Route path="/movie/:movie_id" element={<DisplayMoviePage />} />
              <Route path="/popular" element={<MoviePopular />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<UserPage />} />
              <Route path="/movie1" element={<Movie1 />} />
              <Route path="/movie2" element={<Movie2 />} />
              <Route path="/movie3" element={<Movie3 />} />
              <Route path="/identity" element={<IdentityPage />}>
                <Route path="#:slug" element={<IdentityPage />} />
              </Route>
              <Route
                path="/user/update-password"
                element={<UpdatePassword />}
              />
			  <Route path="/addreview" element={<AddReview />} />
							<Route path="/myreview" element={<MyReview />} />
			  <Route
								path="/edit/:id"
								element={<EditReviewForm />}
							/>
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </>
  );
}
export default App;
