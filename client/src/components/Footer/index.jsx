import Song from 'components/Footer/components/Song';
import Player from 'components/Footer/components/Player';
import Options from 'components/Footer/components/Options';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Song />
      <Player />
      <Options />
    </div>
  );
};

export default Footer;
