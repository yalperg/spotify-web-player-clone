import { NavLink, useLocation } from 'react-router-dom'
import styles from './navigation.module.scss'
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
} from 'assets/icons'

const Navigation = () => {
  const location = useLocation()
  const collectinPath = location.pathname.replace(/[^/]*$/, '')

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            exact
            to='/'
            activeClassName={styles.active}>
            <span>{location.pathname === '/' ? <HomeIconActive /> : <HomeIcon />}</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/search'
            activeClassName={styles.active}>
            <span>
              {location.pathname === '/search' ? <SearchIconActive /> : <SearchIcon />}
            </span>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/collection/'
            activeClassName={styles.active}>
            <span>
              {collectinPath === '/collection/' ? <CollectionIconActive /> : <CollectionIcon />}
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
