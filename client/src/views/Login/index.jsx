import styles from './login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <a href={import.meta.env.VITE_AUTH_URL}>Login with Spotify</a>
    </div>
  );
};

export default Login;
