import React from 'react'
import qs from 'qs';

const LoginCallback = (props) => {
  console.log(props.location)
  const data = qs.parse(props.location.search, { ignoreQueryPrefix: true })
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default LoginCallback
