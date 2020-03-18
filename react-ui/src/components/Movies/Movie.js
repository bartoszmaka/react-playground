import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';

import { GET_MOVIES, UPDATE_MOVIE, DESTROY_MOVIE } from './gql';

const Movie = ({ item }) => {
  const [title, setTitle] = useState(item.title)
  const [duration, setDuration] = useState(item.durationInMinutes)
  const [updateMovie, { loading, error }] = useMutation(UPDATE_MOVIE)
  const [destroyMovie, { loading: loadingDelete, error: errorDelete }] = useMutation(DESTROY_MOVIE)

  const handleDelete = () => {
    destroyMovie({
      variables: { id: item.id },
      optimisticResponse: {
        data: {
          destroyMovie: {
            id: item.id,
            __typename: "Movie"
          }
        }
      },
      update: (proxy) => {
        const data = proxy.readQuery({ query: GET_MOVIES })
        proxy.writeQuery({
          query: GET_MOVIES,
          data: {
            ...data,
            movies: data.movies.filter(movie => movie.id !== item.id)
          }
        })
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const { id } = item;
    const durationInMinutes = parseInt(duration)

    updateMovie({
      variables: { id, title, durationInMinutes },
      optimisticResponse: {
        data: {
          updateMovie: {
            id,
            title,
            durationInMinutes,
            __typename: "Movie"
          }
        }
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} type="text" onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
          Duration
          <input value={duration} type="text" onChange={e => setDuration(e.target.value)} />
        </label>

        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete}>Delete</button>
        {(loading || loadingDelete) && <span>Loading</span>}
        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
        {errorDelete && <pre>{JSON.stringify(errorDelete, null, 2)}</pre>}
      </form>
    </div>
  )
}


export default Movie
