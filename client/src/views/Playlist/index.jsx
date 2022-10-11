import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylist } from 'actions/playlist';

import { playlistActions } from 'store/playlist-slice';

import PlaylistTop from 'components/PlaylistTop';
import Tracks from 'components/Tracks';
import Container from 'components/Container';

const Playlist = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { playlist } = useSelector(state => state.playlist);

  useEffect(() => {
    dispatch(getPlaylist(id));
    return () => {
      dispatch(playlistActions.removePlaylist());
    };
  }, [id, dispatch]);

  return (
    <Container>
      <PlaylistTop playlist={playlist} />
      <Tracks tracks={playlist.tracks?.items} />
    </Container>
  );
};

export default Playlist;
