import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';

const GET_MOVIES = gql`
  {
    movies {
      id,
      title,
      durationInMinutes
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
    )
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
    }
  }
`

const DESTROY_MOVIE = gql`
  mutation DestroyMovie($id: Int!) {
    destroyMovie(id: $id)
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
    destroyMovie({ variables: { id: item.id } })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateMovie({ variables: { id: item.id, title: title, durationInMinutes: parseInt(duration) } })
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
        <button type="button" onClick={handleDelete} >Delete</button>
        { (loading || loadingDelete) && <span>Loading</span> }
        { error && <pre>{JSON.stringify(error, null, 2)}</pre> }
        { errorDelete && <pre>{JSON.stringify(errorDelete, null, 2)}</pre> }
      </form>
    </div>
  )
}

const AddMovieForm = () => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [addMovie, { loading, error }] = useMutation(
    CREATE_MOVIE,
    {
      update(cache, { data: { addMovie } }) {
        const { movies } = cache.readQuery({ query: GET_MOVIES })
        cache.writeQuery({
          query: GET_MOVIES,
          data: { movies: movies.concat([addMovie]) }
        })
      }
    }
  )

  const handleSubmit = (event, addMovie) => {
    event.preventDefault()
    addMovie({ variables: { title, durationInMinutes: parseInt(duration) } })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, addMovie)}>
      <label>
        Title
        <input value={title} type="text" onChange={e => setTitle(e.target.value)} />
      </label>

      <label>
        Duration
        <input value={duration} type="text" onChange={e => setDuration(e.target.value)} />
      </label>

      <button type="submit">Add</button>
      { loading && <span>Loading</span> }
      { error && <pre>{JSON.stringify(error, null, 2)}</pre> }
    </form>
  )
}

export default Movies
