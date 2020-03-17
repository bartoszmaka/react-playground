import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import AddMovieForm from './AddMovieForm';
import Movie from './Movie';
import MoviesListWebSocket from './MoviesListWebSocket';

export const GET_MOVIES = gql`
  {
    movies {
      id,
      title,
      durationInMinutes
      __typename
    }
  }
`

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)
  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      {data.movies.map((item) => <Movie item={item} key={item.id} />)}
      <AddMovieForm />
      <hr />
      <MoviesListWebSocket />
    </div>
  )
};


export default Movies
