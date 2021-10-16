import { NavLink } from 'react-router-dom'
import { HeartIcon, PlusIcon } from 'assets/icons/icons'
import styles from 'assets/styles/components/menu.module.scss'

const Menu = () => {
  return (
    <>
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>
            <span className={styles.plus}>
              <PlusIcon />
            </span>
            Create Playlist
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            <span className={styles.heart}>
              <HeartIcon />
            </span>
            Liked Songs
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className={styles.border}></div>
    </>
  )
}

export default Menu
