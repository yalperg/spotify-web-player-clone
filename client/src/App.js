import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Login from 'views/Login';
import useAuth from 'hooks/useAuth';

import { useDispatch } from 'react-redux';
import { getFeatured, getUser, getUsersPlaylists, getRecentTrack } from 'actions/user';

import styles from 'styles/app.module.scss';

function App() {
  const dispatch = useDispatch();

  const authorizationCode = new URLSearchParams(window.location.search).get('code');
  const isAuth = useAuth(authorizationCode);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUser());
      dispatch(getUsersPlaylists());
      dispatch(getFeatured());
      dispatch(getRecentTrack());
    }
  }, [dispatch, isAuth]);

  return (
    <div className={styles.app}>
      {!isAuth ? (
        <Login />
      ) : (
        <Router>
          <div className={styles.main}>
            <Sidebar />
            <Content />
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
