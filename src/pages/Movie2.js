import React, {useState} from 'react';

const Movie2 = ({ title, poster_path, vote_average, release_date, overview }) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div className="container" style={{ width: '80%', marginLeft: '18%' }}>
                <div className="movie2">
                    Movie 2
                </div>
            </div>
        </>
    )
}

export default Movie2;