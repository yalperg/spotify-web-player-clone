import { useSelector } from 'react-redux';
import styles from 'styles/layout/container.module.scss';
import AlbumsSection from 'components/Search/albums-section';
import ArtistsSection from 'components/Search/artists-section';
import TracksSection from 'components/Search/tracks-section';

const Search = () => {
  const { albums, artists, tracks } = useSelector(state => state.search);
  return (
    <div className={styles.container}>
      {artists.length ? <ArtistsSection title='Artists' items={artists} /> : null}
      {albums.length ? <AlbumsSection title='Albums' items={albums} /> : null}
      {tracks.length ? <TracksSection title='Tracks' items={tracks} /> : null}
    </div>
  );
};

export default Search;
