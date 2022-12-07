import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieHome from './pages/MovieHome';
import MoviePopular from './pages/MoviePopular';
import About from './pages/About';
import Movie1 from './pages/Movie1';
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3';
import Sidebar from './components/Sidebar';
import IdentityPage from './pages/Identity';
import UserProvider from './contexts/UserContex';
import UpdatePassword from './pages/UpdatePassword';
import Header from './components/Header';
import DisplayMoviePage from './pages/DisplayMoviePage';

function App() {
	return (
		<>
			<UserProvider>
				<Router>
					{/* <Header />
					<Sidebar /> */}
					<div class="main">
						<Routes>
							<Route path="/" element={<MovieHome />} />
							<Route path="/movie/:movie_id"element={<DisplayMoviePage />}/>
							<Route path="/popular" element={<MoviePopular />} />
							<Route path="/about" element={<About />} />
							{/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
							<Route path="/movie1" element={<Movie1 />} />
							<Route path="/movie2" element={<Movie2 />} />
							<Route path="/movie3" element={<Movie3 />} />
							<Route path="/identity" element={<IdentityPage />}>
								<Route
									path="#:slug"
									element={<IdentityPage />}
								/>
							</Route>
							<Route
								path="/user/update-password"
								element={<UpdatePassword />}
							/>
						</Routes>
					</div>
				</Router>
			</UserProvider>
		</>
	);

}
export default App;
