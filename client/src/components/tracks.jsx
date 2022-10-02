import styles from 'assets/styles/components/tracks.module.scss'
import Track from 'components/track'

const Tracks = ({ tracks }) => {
  tracks = tracks?.map(track => track.track)

  return (
    <div className={styles.tracks}>
      {tracks ? tracks.map((item, index) => {
        return <Track key={item.id} track={item} index={index} type="Search" />
      }) : null }
    </div>
  )
}

export default Tracks
