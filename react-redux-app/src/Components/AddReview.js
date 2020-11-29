import React,{ useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { handleClick, handleDelete } from '../store/actions/postAction';
import MovieDetails from './MovieDetails'
import '../styles/AddReview.css'

const Review =() =>{
     const dispatch = useDispatch();
    const reviews = useSelector(state => state.Review.todos);
    console.log(reviews)
    const handleDelete =(id)=> dispatch({
        
            type:'DELETE_REVIEW',
            
            payload: id
        
      })

    if( !reviews || !reviews.length ){
        return <p> No Reviews yet</p>

    } 
    return (
        <ul>
              <div  >     {reviews.map((review) => <li className="comment-card">{review.label} 
                          <span><button className="faicons" onClick={()=> handleDelete(review.id)}>X</button></span></li>)}
                        </div>   
      
        </ul>
    
    )
};
const ReviewInput =() =>{
    const dispatch = useDispatch();
    const [newReview, setNewTodo]  = useState('');
    const handleChange = event => setNewTodo(event.target.value);
 const handleClick =()=> dispatch({
        
            type:'ADD_REVIEW',
            
            payload: {
              label: newReview,
              id: Math.ceil(Math.random() * 100),
            }
        
      })
      

    return(
        <>
        
        <input className="input-container" placeholder="What's on your mind?" value={newReview} onChange={handleChange} type="textarea"/>
        <button onClick={handleClick} className="button-class" value="Submit"> ADD REVIEW</button>

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
