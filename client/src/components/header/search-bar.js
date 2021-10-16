import { useState, useEffect } from 'react'
import styles from 'assets/styles/search-bar.module.scss'
import { SearchIcon } from 'assets/icons/icons'
import { useDispatch } from 'react-redux'
import { searchData } from 'actions/search'
import { searchActions } from 'store/search-slice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState()

  const onInputChangeHandler = e => {
    setQuery(e.target.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
  }

  useEffect(() => {
    if (query === '') {
      dispatch(searchActions.removeSearch())
    } else if (query) {
      dispatch(searchData(query))
    }

    return () => {
      dispatch(searchActions.removeSearch())
    }
  }, [query, dispatch])

  return (
    <form className={styles.search} onSubmit={onSubmitHandler}>
      <span>
        <SearchIcon />
      </span>
      <input
        type='search'
        onChange={onInputChangeHandler}
        placeholder='Artists, songs, or podcasts'
      />
    </form>
  )
}

export default SearchBar
