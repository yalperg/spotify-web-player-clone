import styles from './playlist-top.module.scss';
import { NavLink } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { DownloadIcon } from 'assets/icons';

const PlaylistTop = ({ playlist }) => {
  const csvData = playlist.tracks?.items.map(track => ({
    name: track.track.name,
    artist: track.track.artists.map(artist => artist.name).join(', '),
    album: track.track.album.name,
  }));
  console.log('csvData', csvData);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {playlist.images?.length ? <img src={playlist.images[0]?.url} alt='' /> : null}
      </div>
      <div className={styles.info}>
        <h2>PLAYLIST</h2>
        <h1 style={playlist.name?.length > 50 ? { fontSize: '2.5rem' } : null}>{playlist.name}</h1>
        <div className={styles.nameSection}>
          <NavLink to={`/user/${playlist.owner?.id}`} className={styles.owner}>
            {playlist.owner?.display_name}
          </NavLink>
          <span className={styles.time}> • {playlist.tracks?.items.length} songs</span>
          {
            (csvData?.length > 0) && (
              <CSVLink className={styles.downloadBtn} filename={`${playlist.name}_${playlist.owner?.display_name}.csv`} data={csvData} headers={csvHeaders}>
                <DownloadIcon  size={20} />
              </CSVLink>
            )
          }
        </div>
      </div>
    </div>
  );
};

const csvHeaders = [
  { label: 'Name', key: 'name' },
  { label: 'Artist', key: 'artist' },
  { label: 'Album', key: 'album' },
]

export default PlaylistTop;
