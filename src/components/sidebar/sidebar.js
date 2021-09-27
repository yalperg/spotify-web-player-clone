import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import styles from 'assets/styles/sidebar.module.scss'

import Navigation from 'components/sidebar/navigation'
import Menu from 'components/sidebar/menu'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='logo' />
        </Link>
      }

      <Navigation />
      <Menu />
    </div>
  )
}

export default Sidebar
