import React from 'react'
import qs from 'qs';

const Login = () => {
  const handleGoogleLogin = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth`
    const params = qs.stringify({
      client_id: '104716073437-u7c034e3l96ggl1u13dhqk2mn76mddr9.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:3000/oauth/callback',
      response_type: 'code',
      scope: 'openid profile email',
      include_granted_scoles: true,
      state: 'foo'
    })
    window.location.assign(`${url}?${params}`)
  }

  return (
    <div>
      <button type="button" onClick={handleGoogleLogin}>Google</button>
    </div>
  )
}

export default Login
