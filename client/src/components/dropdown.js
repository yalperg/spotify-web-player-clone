import { Link } from 'react-router-dom'
import styles from 'assets/styles/dropdown.module.scss'
import { ExternalLinkIcon } from 'assets/icons/icons'

import { useDispatch } from 'react-redux'
import { authActions } from 'store/auth-slice'

const Dropwdown = ({ dropdownRef }) => {
  const dispatch = useDispatch()

  const signOutHandler = () => {
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
    sessionStorage.removeItem('timestamp')
    dispatch(authActions.signOut())
  }


  return ( 
    <div ref={dropdownRef} className={styles.dropdown}>
      <ul>
        <li>
          <a href='https://www.spotify.com/us/account/overview/' target='_blank' rel="noreferrer">
            Account 
            <span><ExternalLinkIcon /></span>
            </a>
        </li>
        <li>
          <Link to='/'>Profile</Link>
        </li>
        <li>
          <Link to='/' onClick={signOutHandler}>Log Out</Link>
        </li>
      </ul>
    </div>
   )
}
 
export default Dropwdown