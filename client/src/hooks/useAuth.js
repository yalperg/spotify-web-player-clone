import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const useAuth = authorizationCode => {
  const { accessToken, refreshToken, istokenExpired } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    if (!authorizationCode) return

    if (!accessToken) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URI}/login`,
          { Authorization: authorizationCode },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(res => {
          localStorage.setItem('access_token', res.data.accessToken)
          localStorage.setItem('refresh_token', res.data.refreshToken)
          localStorage.setItem('expires_in', res.data.expiresIn)
          localStorage.setItem('timestamp', Date.now())

          window.location = '/'
        })
        .catch(err => {
          console.log(err)
          window.location = '/'
        })
    }

    if (istokenExpired) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URI}/refresh`,
          { RefreshToken: refreshToken },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(res => {
          localStorage.setItem('access_token', res.data.accessToken)
          localStorage.setItem('expires_in', res.data.expiresIn)
          localStorage.setItem('timestamp', Date.now())

          window.location = '/'
        })
        .catch(err => {
          console.log(err)
          window.location = '/'
        })
    }
  }, [authorizationCode, accessToken, istokenExpired, refreshToken])

  return !!accessToken
}

export default useAuth
