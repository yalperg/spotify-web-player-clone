import dotenv from 'dotenv'

dotenv.config()

const redirect_uri =  'http://localhost:3000'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played`

const Login = () => {
  return ( <a href={AUTH_URL}>Login with Spotify</a> )
}
 
export default Login