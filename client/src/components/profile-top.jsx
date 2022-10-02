import styles from 'assets/styles/components/profile-top.module.scss'
import { ProfileIcon } from 'assets/icons/icons'

const PorfileTop = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {info.images?.length ? <img src={info.images[0]?.url} alt="" /> : <ProfileIcon />}
      </div>
      <div className={styles.info}>
        <h2>PROFILE</h2>
        <h1>{info.display_name}</h1>
        <div>
          <span>6 Public Playlists • </span>
          <span className={styles.follower}>{info.followers?.total} {info.followers?.total === 1 ? 'Follower': 'Followers'}</span>
        </div>
      </div>
    </div>
  )
}

export default PorfileTop
