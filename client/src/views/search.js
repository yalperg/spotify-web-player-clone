import { useSelector } from 'react-redux'
import styles from 'assets/styles/container.module.scss'
import AlbumsSection from 'components/search/albums-section'

const Search = () => {
  const { albums, artists, tracks } = useSelector(state => state.search)
  return ( 
    <div className={styles.container}>
      {albums.length ?  <AlbumsSection title='Albums' items={albums} /> : null}
    </div>
    
   )
}
 
export default Search