export const selectMovie =(movie) =>{
    return{
        type:'MOVIE_SELECTED',
        payload: movie,
    };
};

export const trailor =(trailor)=>{
    return{
        type:'MOVIE_TRAILOR',
        payload: trailor,
    }
}