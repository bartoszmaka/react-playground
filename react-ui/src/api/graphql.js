import { client } from '../utils/graphql';
import { gql } from 'apollo-boost';

const getMovies = () => client.query({
  query: gql`
    {
      movies {
        id,
        title,
        durationInMinutes
      }
    }
  `
})

const getMovie = (id) => client.query({
  query: gql`
    {
      movie(id: ${id}) {
        id,
        title,
        durationInMinutes
      }
    }
  `
})

const createMovie = ({ title, minutes }) => client.mutate({

})

const updateMovie = ({ id, title, minutes }) => client.mutate({

})

const destroyMovie = (id) => client.mutate({})

export default {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  destroyMovie,
}
