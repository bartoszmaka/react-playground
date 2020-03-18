import { gql } from 'apollo-boost';

export const CREATE_MOVIE = gql`
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

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: ID!, $title: String!, $durationInMinutes: Int!) {
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

export const DESTROY_MOVIE = gql`
  mutation DestroyMovie($id: ID!) {
    destroyMovie(id: $id) {
      id,
      __typename
    }
  }
`

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

export const GET_USERS = gql`
  {
    users {
      id,
      email,
    }
  }
`

export const USER_CREATED_SUBSCRIPTION = gql`
subscription onUserCreated {
  userCreated {
    id
    email
  }
}
`
