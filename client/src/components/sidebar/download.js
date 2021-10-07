import { NavLink } from 'react-router-dom'
import styles from 'assets/styles/download.module.scss'
import {
  DownloadIcon
} from 'assets/icons/icons'

const DownloadApp = () => {
  return (
    <NavLink
      to='/download'
      className={styles.download}
      activeClassName={styles.active}>
      <span>
        <DownloadIcon />
      </span>
      Download App
    </NavLink>
  )
}

export default DownloadApp
