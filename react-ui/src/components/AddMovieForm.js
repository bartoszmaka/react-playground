import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';

import { GET_MOVIES } from './Movies';

const CREATE_MOVIE = gql`
  mutation CreateMovie($title: String!, $durationInMinutes: Int!) {
    createMovie(
      options: {
        title: $title,
        durationInMinutes: $durationInMinutes
      }
    ) {
      id,
      title,
      durationInMinutes
      __typename
    }
  }
`

const AddMovieForm = () => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [addMovie, { loading, error }] = useMutation(CREATE_MOVIE)

  const handleSubmit = (event) => {
    event.preventDefault()
    setTitle('')
    setDuration('')

    const durationInMinutes = parseInt(duration)

    addMovie({
      variables: { title, durationInMinutes },
      optimisticResponse: {
        data: {
          createMovie: {
            title,
            durationInMinutes,
            __typename: "Movie"
          }
        }
      },
      update: (proxy, { data: { createMovie } }) => {
        const data = proxy.readQuery({ query: GET_MOVIES })
        createMovie && proxy.writeQuery({
          query: GET_MOVIES, data: {
            ...data,
            movies: [
              ...data.movies,
              createMovie,
            ]
          }
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input value={title} type="text" onChange={e => setTitle(e.target.value)} />
      </label>

      <label>
        Duration
        <input value={duration} type="text" onChange={e => setDuration(e.target.value)} />
      </label>

      <button type="submit">Add</button>
      {loading && <span>Loading</span>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </form>
  )
}

export default AddMovieForm
