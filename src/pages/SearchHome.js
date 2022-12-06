import React, { useState, useEffect } from "react";
import MovieBox from "../components/MovieBox";
// import Carousel from "../components/Carousel";
import { useLocation } from "react-router-dom";

const SearchHome = () => {
  const location = useLocation();
  // console.log(location);
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query";
  const [query, setQuery] = useState(location.state.query);
  //   alert(query);
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query=${query}`;

  //   const searchMovie = async (e) => {
  //     e.preventDefault();
  //     console.log("Searching");

  //     try {
  //       const url = `https://api.themoviedb.org/3/search/movie?api_key=287aa00fd9d0384e651f7f3865c5a54f&query=${query}`;
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(data);
  //       setMovies(data.results);
  //     } catch (e) {
  //       console.log(e);
  //     }

  //   };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(query);
          setMovies(data.results);
        },
        [query]
      );
  });

  return (
    <div>
      {/* <Carousel /> */}
      <div>
        {movies.length > 0 ? (
          <div class="grid">
            {movies.map((movieReq) => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        ) : (
          <h2>Sorry!! No Movies Found</h2>
        )}
      </div>
    </div>
  );
};

export default SearchHome;
