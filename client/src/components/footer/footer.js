import styles from 'assets/styles/components/footer.module.scss'
import Song from 'components/footer/song'
import Player from 'components/footer/player'

const Footer = () => {
  return ( 
    <div className={styles.footer}>
      <Song />
      <Player />
      <div className={styles.song}></div>
    </div>
   )
}
 
export default Footer