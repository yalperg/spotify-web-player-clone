import { useSelector } from 'react-redux';
import { PlayerHeartIcon, PlayerComputerIcon } from 'assets/icons';
import styles from './song.module.scss';

const Song = () => {
  const { recentTrack } = useSelector(state => state.user);

  return (
    <div className={styles.song}>
      <img src={recentTrack.album ? recentTrack.album.images[0].url : null} alt='' />
      <div className={styles.info}>
        <span>{recentTrack.name}</span>
        <span>
          {recentTrack.artists ? recentTrack.artists.map(artist => artist.name).join(', ') : null}
        </span>
      </div>
      <PlayerHeartIcon />
      <PlayerComputerIcon />
    </div>
  );
};

export default Song;
