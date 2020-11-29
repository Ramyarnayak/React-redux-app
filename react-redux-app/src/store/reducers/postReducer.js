

import {combineReducers} from 'redux'
import AddReview from '../../components/AddReview'
import avatar from '../Assets/poster_avatar.jpg'
import comeplay from '../Assets/comePlay_poster.jpg'
import './posteReducer.css'



const movieReducer =()=>{
  return[
      {title:'Avatar', releaseDate:'15-08-2017', rating:'9.1',
       trailor:   <img src={avatar} className="posters"  alt="coverpic"/>, 
       
       desc:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
       type:'English | Drama, Horror, Mystery |', review:<div><AddReview/></div>,
    cast:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
    reviewoneline: 'A strictly serviceable horror saga',
    story:'When a mysterious creature named Larry wants to befriend young Oliver and take him away, his parents must do whatever it takes to save him. But theres a price to pay.',
       reviewdetail:'Oliver (Azhy Robertson) is a mute Autistic child living with his mother, who is going through a recent separation. Life isnt easy for Oliver, as can only communicate through his phone, which he even carries to school. Oliver doesnt have friends and just because he is different, he is also the target of the school bullies. But there is someone who wants to hold Olivershand and be his friend for life. That is Larry a self-admitted misunderstood monster, who just needs a friend.Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity Writer-director Jacob Chase invests more in his characters than creating innovative scares, which is both - a good and a bad thing. On the plus side, we get to know and empathise with the protagonist Oliver and his family, but barring a few spooky moments and the atmospherics, the films overall fabric lacks the intensity of a full-blown horror experience. The screenplay moves at a languid pace and burns slowly.',
       synopsis: 'Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity.'},
      {title:'Come Play', releaseDate:'24-12-2016',rating:'8.1',
       review:<div><AddReview/></div>,
      cast:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
      reviewoneline: 'A strictly serviceable horror saga',
      story:'When a mysterious creature named Larry wants to befriend young Oliver and take him away, his parents must do whatever it takes to save him. But theres a price to pay.',
         reviewdetail:'Oliver (Azhy Robertson) is a mute Autistic child living with his mother, who is going through a recent separation. Life isnt easy for Oliver, as can only communicate through his phone, which he even carries to school. Oliver doesnt have friends and just because he is different, he is also the target of the school bullies. But there is someone who wants to hold Olivershand and be his friend for life. That is Larry a self-admitted misunderstood monster, who just needs a friend.Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity Writer-director Jacob Chase invests more in his characters than creating innovative scares, which is both - a good and a bad thing. On the plus side, we get to know and empathise with the protagonist Oliver and his family, but barring a few spooky moments and the atmospherics, the films overall fabric lacks the intensity of a full-blown horror experience. The screenplay moves at a languid pace and burns slowly.'
      
      
      
      ,trailor:<img src={comeplay} className="posters" alt="coverpic"/>, desc:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',type:'English | Drama, Horror, Mystery |',},
      {title:'Super man', releaseDate:'05-09-2019',rating:'7.1', 
      review:<div><AddReview/></div>,
      cast:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
      reviewoneline: 'A strictly serviceable horror saga',
      story:'When a mysterious creature named Larry wants to befriend young Oliver and take him away, his parents must do whatever it takes to save him. But theres a price to pay.',
         reviewdetail:'Oliver (Azhy Robertson) is a mute Autistic child living with his mother, who is going through a recent separation. Life isnt easy for Oliver, as can only communicate through his phone, which he even carries to school. Oliver doesnt have friends and just because he is different, he is also the target of the school bullies. But there is someone who wants to hold Olivershand and be his friend for life. That is Larry a self-admitted misunderstood monster, who just needs a friend.Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity Writer-director Jacob Chase invests more in his characters than creating innovative scares, which is both - a good and a bad thing. On the plus side, we get to know and empathise with the protagonist Oliver and his family, but barring a few spooky moments and the atmospherics, the films overall fabric lacks the intensity of a full-blown horror experience. The screenplay moves at a languid pace and burns slowly.'
      
      ,trailor:<img src={comeplay} className="posters" alt="coverpic"/>,  desc:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',type:'English | Drama, Horror, Mystery |',},
      {title:'Joker', releaseDate:'12-06-2015',rating:'5.1', 
      review:<div><AddReview/></div>,
      cast:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
      reviewoneline: 'A strictly serviceable horror saga',
      story:'When a mysterious creature named Larry wants to befriend young Oliver and take him away, his parents must do whatever it takes to save him. But theres a price to pay.',
         reviewdetail:'Oliver (Azhy Robertson) is a mute Autistic child living with his mother, who is going through a recent separation. Life isnt easy for Oliver, as can only communicate through his phone, which he even carries to school. Oliver doesnt have friends and just because he is different, he is also the target of the school bullies. But there is someone who wants to hold Olivershand and be his friend for life. That is Larry a self-admitted misunderstood monster, who just needs a friend.Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity Writer-director Jacob Chase invests more in his characters than creating innovative scares, which is both - a good and a bad thing. On the plus side, we get to know and empathise with the protagonist Oliver and his family, but barring a few spooky moments and the atmospherics, the films overall fabric lacks the intensity of a full-blown horror experience. The screenplay moves at a languid pace and burns slowly.'
      
      ,trailor:<img src={comeplay} className="posters" alt="coverpic"/>, desc:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',type:'English | Drama, Horror, Mystery |',},
      {title:'Divergent', releaseDate:'21-09-2014',rating:'3.1', 
      review:<div><AddReview/></div>,
      cast:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',
      reviewoneline: 'A strictly serviceable horror saga',
      story:'When a mysterious creature named Larry wants to befriend young Oliver and take him away, his parents must do whatever it takes to save him. But theres a price to pay.',
         reviewdetail:'Oliver (Azhy Robertson) is a mute Autistic child living with his mother, who is going through a recent separation. Life isnt easy for Oliver, as can only communicate through his phone, which he even carries to school. Oliver doesnt have friends and just because he is different, he is also the target of the school bullies. But there is someone who wants to hold Olivershand and be his friend for life. That is Larry a self-admitted misunderstood monster, who just needs a friend.Its not an entirely unique concept but Come Play is the kind of horror flick that can resonate with kids without giving them the chills that they wont recover from. It does so without resorting to excessive violence, blood and gore or nudity Writer-director Jacob Chase invests more in his characters than creating innovative scares, which is both - a good and a bad thing. On the plus side, we get to know and empathise with the protagonist Oliver and his family, but barring a few spooky moments and the atmospherics, the films overall fabric lacks the intensity of a full-blown horror experience. The screenplay moves at a languid pace and burns slowly.'
      ,trailor:<img src={comeplay} className="posters" alt="coverpic"/> , desc:'Gillian Jacobs, Azhy Robertson, John Gallagher Jr, Winslow Fegley, Rachel',type:'English | Drama, Horror, Mystery |',},
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
