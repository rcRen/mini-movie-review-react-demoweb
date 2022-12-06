import React, { useState, useEffect } from 'react';
import MovieBox from '../components/MovieBox';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const API_URL =
	'https://api.themoviedb.org/3/movie/now_playing?api_key=801f3117b8bdd3cee1d9c532a1edb00e';

const MovieHome = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	return (
		<div>
			<Header />
			<Navbar />
			<Carousel />
			<div class="grid">
				{movies.map((movieReq) => (
					<MovieBox key={movieReq.id} {...movieReq} />
				))}
			</div>
		</div>
	);
};

export default MovieHome;
