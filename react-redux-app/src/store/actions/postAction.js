
export const selectMovie =(movie) =>{
  return{
      type:'MOVIE_SELECTED',
      payload: movie,
  };
}; 
 export const handleDelete =(id)=> {
     return{   
  type:'DELETE_REVIEW',
  payload: id
     };
};
export const handleAdd =(newReview)=>{
  return{      
  type:'ADD_REVIEW',
  payload: {
    label: newReview,
    id: Math.ceil(Math.random() * 100),
  }
  };
};






