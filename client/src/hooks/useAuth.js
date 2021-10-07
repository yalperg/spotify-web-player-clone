import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


const server_uri = 'http://localhost:5000'

const useAuth = authorizationCode => {
  const {accessToken, refreshToken, expiresIn, istokenExpired} = useSelector(state => state.auth)

  useEffect(() => {
    if (!authorizationCode) return

    if (!accessToken) {
      axios
        .post(`${server_uri}/login`, {
          headers: {
            'Authorization': authorizationCode,
            'Content-Type': 'application/json',
          }
        })
        .then(res => {
          localStorage.setItem('access_token', res.data.accessToken)
          localStorage.setItem('refresh_token', res.data.refreshToken)
          localStorage.setItem('expires_in', res.data.expiresIn)
          window.location = '/'
        })
        .catch(err => {
          console.log(err)
          window.location = '/'
        })
    }

    if (istokenExpired) {
      /* Post request to server_url/refresh body-> refreshToken*/
      /* set accessToken, expires in  */
      /* catch error */
    }
  }, [authorizationCode, accessToken, istokenExpired])

  return !!accessToken
}

export default useAuth
