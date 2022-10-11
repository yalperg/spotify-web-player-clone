import { useSelector } from 'react-redux';
import AlbumsSection from 'components/Search/albums-section';
import ArtistsSection from 'components/Search/artists-section';
import TracksSection from 'components/Search/tracks-section';
import Container from 'components/Container';

const Search = () => {
  const { albums, artists, tracks } = useSelector(state => state.search);
  return (
    <Container>
      {artists.length ? <ArtistsSection title='Artists' items={artists} /> : null}
      {albums.length ? <AlbumsSection title='Albums' items={albums} /> : null}
      {tracks.length ? <TracksSection title='Tracks' items={tracks} /> : null}
    </Container>
  );
};

export default Search;
