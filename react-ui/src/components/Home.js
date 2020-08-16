import React from 'react';
import useInterval from '../hooks/useInterval';

const faultyFunction = _event => {
  return (undefined).foo
}

const fakeFetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Date.now()), 500)
  })
}

const Home = () => {
  const [isDataLoading, data] = useInterval(fakeFetchData, 3000)

  return (
    <div>
      <div>Home page</div>
      <button onClick={faultyFunction}>Raise an error</button>
      <pre>
        {isDataLoading
          ? ("Loading...")
          : data
        }
      </pre>
    </div>
  )
}

export default Home
