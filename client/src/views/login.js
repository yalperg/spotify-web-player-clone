import styles from 'assets/styles/login.module.scss'
import dotenv from 'dotenv'

dotenv.config()

const Login = () => {
  return (
    <div className={styles.login}>
      <a href={process.env.REACT_APP_AUTH_URL}>Login with Spotify</a>
    </div>
  )
}

export default Login
