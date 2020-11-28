import React from 'react';
import {AddPost} from './AddPost';
import {PostList} from './PostList';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import AddReview from './AddReview';
import {Switch, Route} from 'rea'

export const HomePage = () => {
  return (
    <>
    <MovieList/>
    
      {/* <AddPost />
      <PostList /> */}
      <AddReview/>

    </>
  )
}
