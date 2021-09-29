import { useState } from 'react'
import {
  PreviousIcon,
  NextIcon,
  DownIcon,
  UpIcon,
  UserIcon,
} from 'assets/icons/icons'
import styles from 'assets/styles/header.module.scss'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const dropdownOpenHandler = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className={styles.header}>
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
    </header>
  )
}

export default Header
