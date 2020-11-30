import React from 'react';
import { selectMovie } from '../store/actions/postAction';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieDetails from './MovieDetails'
import '../styles/MovieList.css'


const MovieList = (props) =>{
    
    const dispatch = useDispatch();
  
    const movies = useSelector((state) => state.movieReducer);

    const listItems = movies.map((movie) => {

        return(
            <div className="main">
                <div className="movie-card" key={movie.title}>
                    <span>{movie.poster}</span>
                    
                    <div className="movie-summary">
                        <span className="title">{movie.title}</span>
                        <span className="movie-desc">{movie.desc}</span>
                        <span className="movie-ratings">Ratings: {movie.rating}</span>
                        <span className="movie-type"> {movie.type}</span>
                        <span className="movie-date"> {movie.releaseDate}</span>
                        <span>{}</span>
                
                        <button className="btn-details" onClick={()=> dispatch(selectMovie(movie))}><span className="btn-span">Know more</span></button>
                    </div>
                </div>  
            </div>      
            )
    })


    return(
        <>
         <div class="header"><h1>Welcome to <em>MOVIE_WORLD!!!</em></h1></div>
      
        <div className="list-conatiner">
            <ul className="ul-list">
                {listItems}
            </ul>
        </div>
        
        <MovieDetails/>
         </>
    )
}


export default MovieList;