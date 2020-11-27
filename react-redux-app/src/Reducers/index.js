import { INITIAL_STATE } from "./initialState";
import {combineReducers} from 'redux'
const movieReducer =()=>{
    return[
        {title:'Avengers', releaseDate:'15-08-2017',rating:'9.1'},
        {title:'Avatar', releaseDate:'24-12-2016',rating:'8.1'},
        {title:'Super man', releaseDate:'05-09-2019',rating:'7.1'},
        {title:'Joker', releaseDate:'12-06-2015',rating:'5.1'},
        {title:'Divergent', releaseDate:'21-09-2014',rating:'3.1'},
    ]
}
const selectedMovieReducer =(state=null, action) =>{
    switch(action.type){
        case 'MOVIE_SELECTED':
            return action.payload
        default: return state
    }
}

const rootReducer = combineReducers({
    movieReducer,
    selectedMovieReducer
});

export default rootReducer;