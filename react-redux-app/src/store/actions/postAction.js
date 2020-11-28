export const addPost = (post) => {
  return { type: "ADD_POST", post }
}

export const deletePost = (id) => {
  return { type: "DELETE_POST", id }
}
export const selectMovie =(movie) =>{
  return{
      type:'MOVIE_SELECTED',
      payload: movie,
  };
};





