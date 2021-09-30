import { Link } from 'react-router-dom'
import styles from 'assets/styles/dropdown.module.scss'
import { ExternalLinkIcon } from 'assets/icons/icons'

const Dropwdown = () => {
  return ( 
    <div className={styles.dropdown}>
      <ul>
        <li>
          <Link to='/'>
            Account 
            <span><ExternalLinkIcon /></span>
            </Link>
        </li>
        <li>
          <Link to='/'>Profile</Link>
        </li>
        <li>
          <Link to='/'>Log Out</Link>
        </li>
      </ul>
    </div>
   )
}
 
export default Dropwdown