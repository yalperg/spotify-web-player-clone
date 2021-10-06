import { NavLink } from 'react-router-dom'
import styles from 'assets/styles/playlists.module.scss'

import { useSelector } from 'react-redux'

const Playlists = () => {
  const { playlists } = useSelector(state => state.playlists)

  return (
    <nav className={styles.nav}>
      <ul>
        {playlists.map(playlist => {
          return (
            <li key={playlist.id}>
              <NavLink to={`/playlist/${playlist.id}`} activeClassName={styles.active}>
                {playlist.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Playlists
