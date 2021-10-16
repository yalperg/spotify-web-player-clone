import { useState, useEffect } from 'react' 
import styles from 'assets/styles/search-bar.module.scss'
import { SearchIcon } from 'assets/icons/icons'
import { useDispatch } from 'react-redux'
import { searchData } from 'actions/search'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState()
  
  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if(query){
      dispatch(searchData(query))
    }
  }, [query, dispatch])

  return (
    <form className={styles.search}>
      <span>
        <SearchIcon />
      </span>
      <input type='search' onChange={onInputChange} placeholder='Artists, songs, or podcasts' />
    </form>
  )
}

export default SearchBar
