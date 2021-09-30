import { useState } from 'react'
import {
  PreviousIcon,
  NextIcon,
  DownIcon,
  UpIcon,
  UserIcon,
} from 'assets/icons/icons'
import styles from 'assets/styles/header.module.scss'
import Dropwdown from 'components/dropdown'

const Header = ({ opacity }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const dropdownOpenHandler = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
      <header
        className={styles.header}
        style={{ backgroundColor: `rgba(225,225,225,${opacity})` }}>
        <div>
          <button>
            <PreviousIcon />
          </button>
          <button>
            <NextIcon />
          </button>
        </div>
        <button className={styles.dropdown} onClick={dropdownOpenHandler}>
          <div className={styles.user}>
            <UserIcon />
          </div>
          <span>Yunus Alper Göl </span>
          {!isDropdownOpen ? <DownIcon /> : <UpIcon />}
        </button>
        {isDropdownOpen && <Dropwdown />}
      </header>
  )
}

export default Header
