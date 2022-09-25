import styles from 'assets/styles/components/playlist-top.module.scss'
import { NavLink } from 'react-router-dom'

const PlaylistTop = ( { playlist }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      {playlist.images?.length ? <img src={playlist.images[0]?.url} alt="" /> : null}
      </div>
      <div className={styles.info}>
        <h2>PLAYLIST</h2>
        <h1 style={playlist.name?.length > 50 ? {fontSize: '2.5rem'}: null}>{playlist.name}</h1>
        <div>
          <NavLink to={`/user/${playlist.owner?.id}`} className={styles.owner}>{playlist.owner?.display_name}</NavLink>
          <span className={styles.time}> • {playlist.tracks?.items.length} songs</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistTop
