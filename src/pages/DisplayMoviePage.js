import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MyCard from '../components/UI/MyCard';

function DisplayMoviePage() {
	const { movie_id } = useParams();
	const API_URL =
		'https://api.themoviedb.org/3/movie/' +
		movie_id +
		'?api_key=801f3117b8bdd3cee1d9c532a1edb00e';
	const API_IMG = 'https://image.tmdb.org/t/p/w500';

	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovie(data);
			});
	}, []);

	return (
		<Container className="identity-container">
			<Row>
				<Col md={3} lg={3}>
					<MyCard className="bg-secondary">
						<Sidebar />
					</MyCard>
				</Col>
				<Col md={9} lg={9}>
					<Row>
						<Col md={12} lg={12}>
							<Header />
						</Col>
					</Row>
					<Row>
						<MyCard>
							<Row>
								<h1>
								</h1>
							</Row>
							<Row>
								<Col md={3} ls={3}>
									<img
										src={API_IMG + movie.poster_path}
										alt={movie.title}
									/>
								</Col>
								<Col md={8} ls={8} className="pt-2 " >
                  <h4 className="text-center " ><b>{movie.title}({movie.release_date})</b></h4>
                  <h4 className="text-center " >{movie.genres[0]}</h4>
                  <p className='text-left'>{movie.overview}</p>
                 
								</Col>
							</Row>
						</MyCard>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default DisplayMoviePage;
