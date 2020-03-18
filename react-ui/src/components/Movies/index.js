import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import AddMovieForm from './AddMovieForm';
import UsersListWebSocket from './UsersListWebSocket';
import Movie from './Movie';
import { GET_MOVIES } from './gql';

const Movies = () => {
  const { data, loading, error } = useQuery(GET_MOVIES)

  if (loading) { return <div>Loading...</div> }
  if (error) { return <pre>{JSON.stringify(error, null, 2)}</pre> }

  return (
    <div>
      <h2>Optimistic UI</h2>
      {data.movies.map((item) => <Movie item={item} key={item.id} />)}
      <AddMovieForm />
      <hr/>
      <h2>WebSocket</h2>
      <UsersListWebSocket />
    </div>
  )
};

export default Movies
