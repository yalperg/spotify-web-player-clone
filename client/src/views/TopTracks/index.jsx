import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTops } from 'actions/user';
import Track from 'components/Track';

import Container from 'components/Container';

const Tracks = () => {
  const { tops } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTops('tracks'));
  }, [dispatch]);

  return (
    <Container>
      <h1 className={styles.title}>Your most listened tracks</h1>
      {tops.tracks.map((track, index) => (
        <Track key={index} track={track} index={index} />
      ))}
    </Container>
  );
};

export default Tracks;
