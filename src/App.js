import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieHome from './pages/MovieHome';
import MoviePopular from './pages/MoviePopular';
import About from './pages/About';
import Movie1 from './pages/Movie1';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdentityPage from './pages/Identity';

import UserProvider from './contexts/UserContex';
import UpdatePassword from './pages/UpdatePassword';

function App() {
	return (
		<>
			{/* <Header /> */}
			<UserProvider>
				<Router>
					{/* <Navbar /> */}
					<div class="main" className="container">
						<Routes>
						<Route path="/" element={<MovieHome />} />
          <Route path="/popular" element={<MoviePopular />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/profile" element={isLogin ? <Profile />} : '' /> */}
          <Route path="/movie1" element={<Movie1 />} />
							<Route path="/identity" element={<IdentityPage />}>
								<Route
									path="#:slug"
									element={<IdentityPage />}
								/>
							</Route>
							<Route
									path="/user/update-password"
									element={<UpdatePassword/>}
								/>
						</Routes>
					</div>
				</Router>
			</UserProvider>
		</>
	);}
export default App;
