import { useSelector } from 'react-redux'
import styles from 'assets/styles/container.module.scss'
import AlbumsSection from 'components/search/albums-section'
import ArtistsSection from 'components/search/artists-section'
import TracksSection from 'components/search/tracks-section'

const Search = () => {
  const { albums, artists, tracks } = useSelector(state => state.search)
  return ( 
    <div className={styles.container}>
      {tracks.length ? <TracksSection title='Tracks' items={tracks} /> : null}
      {artists.length ? <ArtistsSection title='Artists' items={artists} /> : null}
      {albums.length ?  <AlbumsSection title='Albums' items={albums} /> : null}
    </div>
    
   )
}
 
export default Search