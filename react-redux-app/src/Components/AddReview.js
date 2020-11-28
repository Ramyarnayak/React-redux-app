import React,{ useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { handleClick, handleDelete } from '../store/actions/postAction';

const Todos =() =>{
     const dispatch = useDispatch();
    const todos = useSelector(state => state.Review.todos);
    console.log(todos)
    const handleDelete =(id)=> dispatch({
        
            type:'DELETE_REVIEW',
            
            payload: id
        
      })

    if( !todos || !todos.length ){
        return <p> No todos</p>

    } 
    return (
        <ul>
           {todos.map((todo) => <li onClick={()=> handleDelete(todo.id)}>{todo.label}   X</li>)}
        </ul>
    
    )
};
const TodoInput =() =>{
    const dispatch = useDispatch();
    const [newTodo, setNewTodo]  = useState('');
    const handleChange = event => setNewTodo(event.target.value);
 const handleClick =()=> dispatch({
        
            type:'ADD_REVIEW',
            
            payload: {
              label: newTodo,
              id: Math.ceil(Math.random() * 100),
            }
        
      })
      

    return(
        <>
        <input value={newTodo} onChange={handleChange} type="text"/>
        <button onClick={handleClick}> ADD REVIEW</button>

        </>
    )
}

function AddReview() {
    return (
        <div>    <Todos/>
            
                <TodoInput/>
            
        </div>
    )
}

export default AddReview
