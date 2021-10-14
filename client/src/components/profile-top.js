import styles from 'assets/styles/profile-top.module.scss'
import { ProfileIcon } from 'assets/icons/icons'

const PorfileTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}><ProfileIcon /></div>
    </div>
  )
}

export default PorfileTop
