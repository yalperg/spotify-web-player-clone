import styles from './artist.module.scss'

const Artist = ({ artist, index }) => {
  return (
    <div className={styles.artist}>
      <span className={styles.order}>{index+1}</span>
      <img src={artist.images[1].url} alt='' />
      <div className={styles.text}>
        <span className={styles.name}>{artist.name}</span>
        <span>{artist.genres.join(', ')}</span>
      </div>
    </div>
  )
}

export default Artist
