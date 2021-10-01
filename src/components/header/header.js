import { useLocation } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import { DownIcon, UpIcon, UserIcon } from 'assets/icons/icons'
import styles from 'assets/styles/header.module.scss'
import Dropwdown from 'components/dropdown'
import CollectionNav from 'components/header/collection-nav'
import PreviousBtn from 'components/header/previous-btn'
import NextBtn from 'components/header/next-btn'
import SearchBar from 'components/header/search-bar'

const Header = ({ opacity }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef()
  const btnRef = useRef()

  const location = useLocation()
  const collectionPath = location.pathname.replace(/[^/]*$/, '')
  const searchPath = location.pathname

  const dropdownOpenHandler = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    function outsideClickHandler(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', outsideClickHandler)
    return () => {
      document.removeEventListener('mousedown', outsideClickHandler)
    }
  }, [dropdownRef, isDropdownOpen])

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: `rgba(57, 54, 57,${opacity})` }}>
      <div className={styles.nav}>
        <PreviousBtn />
        <NextBtn />
        {collectionPath === '/collection/' && <CollectionNav />}
        {searchPath === '/search' && <SearchBar />}
      </div>
      <button
        ref={btnRef}
        className={styles.dropdown}
        onClick={dropdownOpenHandler}>
        <div className={styles.user}>
          <UserIcon />
        </div>
        <span>Yunus Alper Göl </span>
        {!isDropdownOpen ? <DownIcon /> : <UpIcon />}
      </button>
      {isDropdownOpen && <Dropwdown dropdownRef={dropdownRef} />}
    </header>
  )
}

export default Header
