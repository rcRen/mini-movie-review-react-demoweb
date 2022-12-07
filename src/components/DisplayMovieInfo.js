import React,{ useState , useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import MyCard from '../components/UI/MyCard'



export function GetMovieInfo({title, poster_path, vote_average, release_date, overview }){
    const [showInfo, setShowInfo] = useState(false);
    return(
        <MyCard>
            <button>Movie info</button>
            <h1>{title}</h1>
            <img src = {API_IMG + poster_path}/>
            <p>{overview}</p>
        </MyCard>
    )

}


const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=a0f3735762dd7e7beff76ce2ed050436";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function  DisplayMovieInfo() {
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
    <div >
        {movies.map((movieReq)=><GetMovieInfo key={movieReq.id}{...movieReq}/>)}
    </div>
  )
}
export default DisplayMovieInfo



