import styles from 'assets/styles/components/playlist-top.module.scss'

const PlaylistTop = ( { playlist }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      {playlist.images?.length ? <img src={playlist.images[0]?.url} alt="" /> : null}
      </div>
      <div className={styles.info}>
        <h2>PLAYLIST</h2>
        <h1>{playlist.name}</h1>
        <div>
          <span>{playlist.owner?.display_name} </span>
          <span className={styles.time}>• {playlist.tracks?.items.length} songs</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistTop
