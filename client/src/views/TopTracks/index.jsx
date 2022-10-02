import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTops } from 'actions/user';
import Track from 'components/Track';

import styles from 'styles/layout/container.module.scss';

const Tracks = () => {
  const { tops } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTops('tracks'));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your most listened tracks</h1>
      {tops.tracks.map((track, index) => (
        <Track key={index} track={track} index={index} />
      ))}
    </div>
  );
};

export default Tracks;
