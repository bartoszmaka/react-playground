import React, { useEffect, useState } from 'react';

import api from '../api';
import ListItem from './reusable/ListItem'
import ListItemEdit from './reusable/ListItemEdit'

const faultyFunction = _event => {
  return (undefined).foo
}

const Home = () => {
  // const [queryResult, setQueryResult] = useState(null)
  // const [movies, setMovies] = useState([])
  // const [editedMovie, setEditedMovie] = useState({})

  // useEffect(() => {
  //   api.graphql.getMovies()
  //     .then(response => {
  //       setQueryResult(response.data)
  //       setMovies(response.data.movies)
  //     })
  //     .catch(error => setQueryResult(error))
  // }, [])

  // const handleDelete = (id) => api.graphql.destroyMovie(id)
  // const handleEdit = (movieData) => setEditedMovie(movieData)
  // const handleUpdate = (updatedData) => {
  //   api.graphql.updateMovie({...editedMovie, ...updatedData})
  //   setEditedMovie({})
  // }

  // const renderRow = (movie) => {
  //   if (movie.id === editedMovie.id) {
  //     return (
  //       <ListItemEdit
  //         key={movie.id}
  //         handleUpdate={handleUpdate}
  //         handleEdit={() => handleEdit(movie)}
  //         initialValues={movie}
  //       >
  //         {JSON.stringify(movie, null, 2)}
  //       </ListItemEdit>
  //     )
  //   }
  //   return (
  //     <ListItem
  //       key={movie.id}
  //       handleDelete={() => handleDelete(movie.id)}
  //       handleEdit={() => handleEdit(movie)}
  //     >
  //       {JSON.stringify(movie, null, 2)}
  //     </ListItem>
  //   )
  // }

  return (
    <div>
      <div>Home page</div>
      <button onClick={faultyFunction}>Raise an error</button>

      {/* <div>{movies.map(renderRow)}</div> */}

      {/* <pre>{JSON.stringify(queryResult, null, 2)}</pre> */}
    </div>
  )
}

export default Home
