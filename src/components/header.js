import { useLocation } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import {
  PreviousIcon,
  NextIcon,
  DownIcon,
  UpIcon,
  UserIcon,
} from 'assets/icons/icons'
import styles from 'assets/styles/header.module.scss'
import Dropwdown from 'components/dropdown'
import CollectionNav from 'components/collection-nav'

const Header = ({ opacity }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const collectionPath = location.pathname.replace(/[^/]*$/, '')
  const dropdownRef = useRef()
  const btnRef = useRef()

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

    document.addEventListener('mouseup', outsideClickHandler)
    return () => {
      document.removeEventListener('mouseup', outsideClickHandler)
    }
  }, [dropdownRef, isDropdownOpen])

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: `rgba(225,225,225,${opacity})` }}>
      <div className={styles.nav}>
        <button>
          <PreviousIcon />
        </button>
        <button>
          <NextIcon />
        </button>
        {collectionPath === '/collection/' && <CollectionNav />}
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
