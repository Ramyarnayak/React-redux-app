import React,{ useState} from 'react'
// import { connect } from 'react-redux'

import { useSelector } from "react-redux";
import AddReview from './AddReview';
import '../styles/MovieDetails.css'



const MovieDetails =(props) =>{
    const[displayAddModal,setDisplayAddModal]=useState(false);

    const [click, setClick] = useState(true);

    const handleClick =()=>{
        setClick(true)
    }
  
    const selectedMovie = useSelector((state) => state.selectedMovieReducer); 
    const review=()=>{
        return(
            <AddReview/>
        )
    }
 
    if(!selectedMovie){
        return(
        <div className="details-container" >

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
            
            <div className="properties">
             
         <h2 className="poster">Title:{selectedMovie.trailor}</h2>
         <div className="container">
         <span className="title-details">{selectedMovie.title}</span>
         
                <span className="movie-desc-details"> {selectedMovie.desc}</span>
                <span className="movie-ratings-details">Ratings: {selectedMovie.rating}</span>
                <span className="movie-type-details"> {selectedMovie.type}</span>
                <span className="movie-date-details"> {selectedMovie.releaseDate}</span>
                <span className="movie-reviewoneline-details">{selectedMovie.reviewoneline}</span>
                </div>
       <div className="container2">
        <span className="synopsis"><span className="headings">Synopsis:</span>{selectedMovie.synopsis}</span>
        
        <span className="critics-ratings"><span className="headings">Critic's Ratings:</span>{selectedMovie.rating}</span>
        <span className="story"><span className="headings">{selectedMovie.title} story:</span>{selectedMovie.story}</span>
        <span className="fullreview"><span className="headings">{selectedMovie.title} Movie Review:</span>{selectedMovie.reviewdetail}</span>

        <span className="review">:{selectedMovie.review}</span>
        </div>
{/*         
        <button onClick={()=>console.log("hi")}>Watch trailor</button> */}

         <button onClick={click ? <AddReview/> : <MovieDetails/>}>Write review</button> 
        
       
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