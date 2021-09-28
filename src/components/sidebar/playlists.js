import { NavLink } from 'react-router-dom'
import styles from 'assets/styles/playlists.module.scss'

const pls = [
  { 
    id: 1,
    name: 'Sanattır ya bu',
  },
  {
    id: 2,
    name: 'Radyo 90',
  },
  {
    id: 3,
    name: 'Random bullshit go ama türkçe',
  },
  {
    id: 4,
    name: 'Epic',
  },
  {
    id: 5,
    name: 'Deutsche',
  },
  {
    id: 6,
    name: 'You just activated my trap list',
  },
  {
    id: 7,
    name: 'Playlist 7',
  },
  {
    id: 8,
    name: 'Playlist 8',
  },
  {
    id: 9,
    name: 'Playlist 9',
  },
  {
    id: 10,
    name: 'Playlist 10',
  },
  {
    id: 11,
    name: 'Playlist 11',
  },
  {
    id: 12,
    name: 'Playlist 12',
  },
  {
    id: 13,
    name: 'Playlist 13',
  },
  {
    id: 14,
    name: 'Playlist 14',
  },
  {
    id: 15,
    name: 'Playlist 15',
  },
  {
    id: 16,
    name: 'Playlist 16',
  },
  {
    id: 17,
    name: 'Playlist 17',
  },
  {
    id: 18,
    name: 'Playlist 18',
  },
]

const Playlists = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {pls.map(pl => {
          return (
            <li key={pl.id}>
              <NavLink to={`/playlist/${pl.id}`} activeClassName={styles.active}>
                {pl.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Playlists
