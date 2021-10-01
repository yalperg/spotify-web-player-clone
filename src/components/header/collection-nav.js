import { NavLink } from 'react-router-dom'
import styles from 'assets/styles/collection-nav.module.scss'

const CollectionNav = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink to='/collection/playlists' activeClassName={styles.active}>Playlists</NavLink>
        </li>
        <li>
          <NavLink to='/collection/podcasts' activeClassName={styles.active}>Podcats</NavLink>
        </li>
        <li>
          <NavLink to='/collection/artists' activeClassName={styles.active}>Artists</NavLink>
        </li>
        <li>
          <NavLink to='/collection/albums' activeClassName={styles.active}>Albums</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default CollectionNav
