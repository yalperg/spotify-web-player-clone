import styles from 'assets/styles/components/player.module.scss'
import Song from 'components/player/song'

const Player = () => {
  return ( 
    <div className={styles.player}>
      <Song />
      <div className={styles.song}>Player</div>
      <div className={styles.song}>Settings</div>
    </div>
   )
}
 
export default Player