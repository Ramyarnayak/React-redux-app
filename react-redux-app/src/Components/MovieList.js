import React from 'react';
import {selectMovie , trailor} from '../store/actions/postAction';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AddReview from './AddReview';
import MovieDetails from './MovieDetails'
import '../styles/MovieList.css'


const MovieList = (props) =>{
    const dispatch = useDispatch();
  
    const movies = useSelector((state) => state.movieReducer);
    // const trailor = useSelector((state) => state.movieTrailor);

    const listItems = movies.map((movie) => {
        return(
            <div className="main">
            <div className="movie-card" key={movie.title}>
                <span>{movie.trailor}</span>
                <div className="movie-summary">
                <span className="title">{movie.title}</span>
                <span className="movie-desc">{movie.desc}</span>
                <span className="movie-ratings">Ratings: {movie.rating}</span>
                <span className="movie-type"> {movie.type}</span>
                <span className="movie-date"> {movie.releaseDate}</span>
                
                
        <span>{}</span>
                <button className="btn-details" onClick={()=> dispatch(selectMovie(movie))}>Details</button>
                </div>
            </div>  
            </div>      
            )
    })
    return(
        <>
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