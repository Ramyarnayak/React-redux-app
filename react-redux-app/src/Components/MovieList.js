import React from 'react';
import {selectMovie , trailor} from '../store/actions/postAction';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const MovieList = (props) =>{
    const dispatch = useDispatch();
  
    const movies = useSelector((state) => state.movieReducer);
    // const trailor = useSelector((state) => state.movieTrailor);

    const listItems = movies.map((movie) => {
        return(
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={()=> dispatch(selectMovie(movie))}>Details</button>
                <button onClick={()=> dispatch(trailor(movie))}>Watch Trailor</button>
            </div>        
            )
    })
    return(
        <div className="list-conatiner">
            <h2>Movie-list</h2>
            <ul>
                {listItems}

            </ul>
            <MovieDetails/>

        </div>
    )
}


export default MovieList;