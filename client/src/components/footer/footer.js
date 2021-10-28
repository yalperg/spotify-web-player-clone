import styles from 'assets/styles/components/footer.module.scss'
import Song from 'components/footer/song'
import Player from 'components/footer/player'
import Options from 'components/footer/options'

const Footer = () => {
  return ( 
    <div className={styles.footer}>
      <Song />
      <Player />
      <Options />
    </div>
   )
}
 
export default Footer