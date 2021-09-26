import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import styles from 'assets/styles/sidebar.module.scss'

import Nav from 'components/sidebar/nav'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='logo' />
        </Link>
      }

      <Nav />
    </div>
  )
}

export default Sidebar
