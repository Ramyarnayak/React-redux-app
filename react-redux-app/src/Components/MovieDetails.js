import React from 'react'
// import { connect } from 'react-redux'

import { useSelector } from "react-redux";


const MovieDetails =() =>{
  
    const selectedMovie = useSelector((state) => state.selectedMovieReducer);
    if(!selectedMovie){
        return(
        <div className="details-container" style={{width:'70%'}}>
            <h2> Movie</h2>
            <div className="properties">
                <p>Select movie</p>
            </div>

        </div>
        )
    }
    else
    {
        
        return(
            <div className="details-container" style={{width:'70%'}}>
            <h2> Movie</h2>
            <div className="properties">
        <p>Title:{selectedMovie.title}</p>
        <p>Release:{selectedMovie.releaseDate} </p>
        <p>Ratings:{selectedMovie.rating}</p>
       
     
            </div>
            
        </div>
        )
    }
    
}
// const mapStateProps =(state) =>{
//     return{
//         selectedMovie : state.selectedMovie
//     }
// }

export default MovieDetails;