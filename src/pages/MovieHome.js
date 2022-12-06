import React, { useState, useEffect } from "react";
import MovieBox from '../components/MovieBox';
import MainCarousel from '../components/MainCarousel';

const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=801f3117b8bdd3cee1d9c532a1edb00e";

const MovieHome = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovies(data.results);
            })
    }, [])

    return (
        <>
        
            <div className="container" style={{ width: '80%', marginLeft: '18%' }}>
                <div class="main-carousel" style={{width: '90%', marginLeft: '10%'}}>
                    <MainCarousel />
                </div>
                <div className="grid">
                    {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
            </div>
        </>
    );
}

export default MovieHome;