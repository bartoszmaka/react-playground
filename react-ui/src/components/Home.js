import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';

import { client } from '../utils/graphql';

const faultyFunction = _event => {
  return (undefined).foo
}

const Home = () => {
  const [queryResult, setQueryResult] = useState(null)

  useEffect(() => {
    client.query({
      query: gql`
        {
          articles {
            id,
            title,
            user {
              email,
              articlesCount
            }
          }
        }
      `
    }).then(response => setQueryResult(response.data))
      .catch(error => setQueryResult(error))
  }, [])

  return (
    <div>
      <div>Home page</div>
      <button onClick={faultyFunction}>Raise an error</button>
      <pre>{JSON.stringify(queryResult, null, 2)}</pre>
    </div>
  )
}

export default Home
