import React,{ useState} from 'react'
import { useSelector } from "react-redux";
import AddReview from './AddReview';
import '../styles/MovieDetails.css'


const MovieDetails =(props) =>{
    
    const selectedMovie = useSelector((state) => state.selectedMovieReducer); 
 
    if(!selectedMovie){
        return(

        <div className="details-container" >
            <h2 className="english-movie-label"> Latest English Movies</h2>
            <div className="properties">
                <div className="english-movie-desc">
                    Hollywood is growing with each year and the number of 
                    films releasing every has to has grown exponentially. Here 
                    in this section, we give a list of latest Hollywood flicks which have released giving you
                     an inside to their reviews. Not only that but this section even provides you with details
                      like cast information, box-office collections, related videos and pictures of all the latest 
                      Hollywood films. This latest Hollywood films listing is a one-stop 
                    solution for all the latest updates about new English movies running in theatres.
                </div>
                <br></br>
             <div className="select">Select a movie to know more about it</div>
         </div>
        </div>
        )
    }

    else
    {
        return(

            <div className="details-container" style={{width:'70%'}}>
            <div className="properties">
                 <h2 className="poster">{selectedMovie.poster}</h2>
                 <div className="container">
                    <span className="title-details">{selectedMovie.title}</span>
                    <span className="movie-desc-details"> {selectedMovie.desc}</span>
                    <span className="movie-ratings-details">Ratings: {selectedMovie.rating}</span>
                    <span className="movie-type-details"> {selectedMovie.type}</span>
                    <span className="movie-date-details"> {selectedMovie.releaseDate}</span>
                    <span className="movie-reviewoneline-details">{selectedMovie.reviewoneline}</span>
                </div>
        
         <div className="container2">

         <span className="synopsis">
             <span className="label">Synopsis:</span>
             <div className="content">{selectedMovie.synopsis}</div>
         </span>
        
        
        <span className="story">
            <span className="label">{selectedMovie.title} story:</span>
            <div className="content">{selectedMovie.story}</div>
        </span>
        
         <span className="fullreview">
             <span className="label">{selectedMovie.title} Movie Review:</span>
            <div className="content">{selectedMovie.reviewdetail}</div>
        </span>

        <span className="review">:{selectedMovie.review}</span>
     </div>

       
    </div>
          
     </div>
        )
    }
    
}


export default MovieDetails;