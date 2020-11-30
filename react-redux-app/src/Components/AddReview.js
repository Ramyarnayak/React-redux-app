import React,{ useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { handleDelete, handleAdd } from '../store/actions/postAction';
import '../styles/AddReview.css'

const Review =() =>{

     const dispatch = useDispatch();
     const reviews = useSelector(state => state.Review.reviews);
    
         if( !reviews || !reviews.length ){
            return <p> No Reviews yet</p>

        } 
        return (
                 <ul>
                <div>    
                     {reviews.map((review) => <li className="comment-card">{review.label} 
                        <span>
                        <button className="faicons" onClick={()=> dispatch(handleDelete(review.id))}>X</button>
                        </span></li>)}
                </div>   
                </ul>
    
    )
};

const ReviewInput =() =>{
    const dispatch = useDispatch();
    const [newReview, setNewTodo]  = useState('');
    const handleChange = event => setNewTodo(event.target.value);
 
      return(
        <>
        <input className="input-container" placeholder="Write Your Review Here..." value={newReview} onChange={handleChange} type="textarea"/>
        <button onClick={()=> dispatch(handleAdd(newReview))} className="button-class" value="Submit"> ADD REVIEW</button>
        </>
    )
}

function AddReview(props) {
    return (
        <div>   
               <ReviewInput/>
                <Review/>
       
        </div>
    )
}

export default AddReview
