import styles from 'assets/styles/search-bar.module.scss'
import { SearchIcon } from 'assets/icons/icons'

const SearchBar = () => {
  return (
    <form className={styles.search}>
      <span>
        <SearchIcon />
      </span>
      <input type='search' placeholder='Artists, songs, or podcasts' />
    </form>
  )
}

export default SearchBar
