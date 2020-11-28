

import {combineReducers} from 'redux'


const movieReducer =()=>{
  return[
      {title:'Avengers', releaseDate:'15-08-2017',rating:'9.1', trailor:'railor1'},
      {title:'Avatar', releaseDate:'24-12-2016',rating:'8.1', trailor:'railor1'},
      {title:'Super man', releaseDate:'05-09-2019',rating:'7.1', trailor:'railor1'},
      {title:'Joker', releaseDate:'12-06-2015',rating:'5.1', trailor:'railor1'},
      {title:'Divergent', releaseDate:'21-09-2014',rating:'3.1', trailor:'railor1'},
  ]
}

const selectedMovieReducer =(state=null, action) =>{

  switch(action.type){
      case 'MOVIE_SELECTED':
        
          return action.payload
      case 'MOVIE_TRAILOR':
          return action.payload.trailor
      default: return state
  }
}
const initialState ={
  todos:[],
}
const Review = (state= initialState, action ) => {
  switch(action.type)
  {
    case 'ADD_REVIEW':
      return{
        ...state, 
        todos: [...state.todos, action.payload],
      };
      case 'DELETE_REVIEW':
      return{
        ...state, 
        todos: state.todos.filter(todo => todo.id !== action.payload), 
      };
      default: return state
      
  }
}
const postReducer = combineReducers({
  movieReducer,
  selectedMovieReducer,
 
   Review,
});


export default postReducer;
