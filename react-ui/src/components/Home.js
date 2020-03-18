import React from 'react';

const faultyFunction = _event => {
  return (undefined).foo
}

const Home = () => {
  return (
    <div>
      <div>Home page</div>
      <button onClick={faultyFunction}>Raise an error</button>
    </div>
  )
}

export default Home
