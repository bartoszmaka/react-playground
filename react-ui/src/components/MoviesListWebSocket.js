import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';

const MOVIE_CREATED_SUBSCRIPTION = gql`
subscription onMovieCreated {
  movieCreated {
    id
    title
    durationInMinutes
  }
}
`

const MOVIE_UPDATED_SUBSCRIPTION = gql`
subscription onMovieUpdated {
  movieUpdated {
    id
    title
    durationInMinutes
  }
}
`

const MOVIE_DESTROYED_SUBSCRIPTION = gql`
subscription onMovieDestroyed {
  movieDestroyed {
    id
    title
    durationInMinutes
  }
}
`

const MoviesListWebSocket = () => {
  const [movies, setMovies] = useState([])
  const { data: dataCreated, loading: loadingAdd } = useSubscription(MOVIE_CREATED_SUBSCRIPTION)
  const { data: dataUpdated, loading: loadingUpdate } = useSubscription(MOVIE_UPDATED_SUBSCRIPTION)
  const { data: dataDestroyed, loading: loadingDestroy } = useSubscription(MOVIE_DESTROYED_SUBSCRIPTION)
  const isLoading = loadingAdd && loadingUpdate && loadingDestroy
  console.log({
    loadingAdd, dataCreated
  });

  const notificationColor = () => dataDestroyed ? 'red' : 'green'

  const notificationStyle = {
    backgroundColor: notificationColor(),
    width: '300px',
    height: '50px',
    textAlign: 'center',
    border: 'solid black 2px'
  }

  return (
    <div>
      <div style={{notificationStyle}}>{!isLoading && "Foo"}</div>
      {movies.map(movie => (
        <>
          <h4>{movie.title}</h4>
          <p>{`id: ${movie.id}`}</p>
          <p>{`duration: ${movie.name}`}</p>
        </>
      ))}
    </div>
  )
}

export default MoviesListWebSocket
