import { useState, useEffect } from 'react' 
import styles from 'assets/styles/search-bar.module.scss'
import { SearchIcon } from 'assets/icons/icons'
import { search } from 'api/index'

const SearchBar = () => {
  const [query, setQuery] = useState()
  const [searchData, setSearchData] = useState()
  const accessToken = sessionStorage.getItem('access_token')
  
  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if(query){
      search(accessToken, query).then(res => console.log(res.data))
    }
  }, [query, accessToken])

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
