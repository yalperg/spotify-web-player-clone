import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersTops } from 'actions/user';
import Artist from 'components/Artist';
import Container from 'components/Container';

const Artists = () => {
  const { tops } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTops('artists'));
  }, [dispatch]);

  return (
    <Container>
      <h1 className={styles.title}>Your most listened artists</h1>
      {tops.artists.map((artist, index) => (
        <Artist key={index} artist={artist} index={index} />
      ))}
    </Container>
  );
};

export default Artists;
