import { NavLink } from 'react-router-dom';
import styles from './collection-nav.module.scss';

const CollectionNav = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <NavLink to='/collection/top-artists' activeClassName={styles.active}>
            Top Artists
          </NavLink>
        </li>
        <li>
          <NavLink to='/collection/top-tracks' activeClassName={styles.active}>
            Top Tracks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CollectionNav;
