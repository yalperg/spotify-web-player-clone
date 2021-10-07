import dotenv from 'dotenv'

dotenv.config()

const Login = () => {
  return ( <a href={process.env.REACT_APP_AUTH_URL}>Login with Spotify</a> )
}
 
export default Login