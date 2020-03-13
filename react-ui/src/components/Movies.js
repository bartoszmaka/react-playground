import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';

const GET_MOVIES = gql`
  {
    movies {
      id,
      title,
      durationInMinutes
      __typename
    }
  }
`

const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: Int!, $title: String!, $durationInMinutes: Int!) {
    updateMovie(
      id: $id,
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

const DESTROY_MOVIE = gql`
  mutation DestroyMovie($id: Int!) {
    destroyMovie(id: $id) {
      id,
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
    </div>
  )
};

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

export default Movies
