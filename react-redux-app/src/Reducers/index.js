import { INITIAL_STATE } from "./initialState";
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
const movieTrailor =()=>{
    return[
        {trailor: 'trailor_1'},
        {trailor: 'trailor_12'},
        {trailor: 'trailor_3'},
        {trailor: 'trailor_4'},
        {trailor: 'trailor_5'},
      
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

const rootReducer = combineReducers({
    movieReducer,
    selectedMovieReducer,
    movieTrailor
});

export default rootReducer;