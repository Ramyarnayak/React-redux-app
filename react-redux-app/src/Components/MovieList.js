import React from 'react';
// import { connect} from 'react-redux';
import {selectMovie } from '../Actions/index';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MovieList = (props) =>{
    const dispatch = useDispatch();
  
    const movies = useSelector((state) => state.movieReducer);
    // const {selectMovie} =props
   
    const listItems = movies.map((movie) => {
        return(
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={()=> dispatch(selectMovie(movie))}>Details</button>
            </div>        
            )
    })
    return(
        <div className="list-conatiner">
            <h2>Movie-list</h2>
            <ul>
                {listItems}
            </ul>

        </div>
    )
}

// const mapStateToProps =(state) =>{
//     return{
//         movies: state.movies
//     }
// }
// const mapDispatchToProps ={
//     selectMovie: selectMovie
// }

export default MovieList;