import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
} from 'assets/icons/icons'
import logo from 'assets/images/logo.svg'
import styles from 'assets/styles/sidebar.module.scss'

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(0)

  return (
    <div className={styles.sidebar}>
      {
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='logo' />
        </Link>
      }
      <nav className={styles.menu}>
        <ul>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName={styles.active}
              isActive={(match, location) => {
                match && setActiveIcon(0)
                return match
              }}>
              <span>
                {activeIcon === 0 ? <HomeIconActive /> : <HomeIcon />}
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search'
              activeClassName={styles.active}
              isActive={(match, location) => {
                match && setActiveIcon(1)
                return match
              }}>
              <span>
              {activeIcon === 1 ? <SearchIconActive /> : <SearchIcon />}
              </span>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/collection/playlists'
              activeClassName={styles.active}
              isActive={(match, location) => {
                match && setActiveIcon(2)
                return match
              }}>
              <span>
                {activeIcon === 2 ? <CollectionIconActive /> : <CollectionIcon />}
              </span>
              Your Library
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
