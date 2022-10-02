import styles from 'styles/layout/container.module.scss';
import Section from 'components/Section';
import greetings from 'functions/greetings';
import { average } from 'color.js';

import { useSelector } from 'react-redux';

const Home = ({ bg, setBg }) => {
  const { playlists, featured } = useSelector(state => state.user);
  const greeting = greetings();

  const mouseEnterHandler = url => {
    average(url, { format: 'hex' }).then(color =>
      setBg({
        ...bg,
        home: color,
      })
    );
  };

  const mouseLeaveHandler = () => {
    setBg({
      ...bg,
      home: '#393639',
    });
  };

  return (
    <div className={styles.container}>
      <Section
        title={greeting}
        items={playlists}
        size='small'
        mouseEnterHandler={mouseEnterHandler}
        mouseLeaveHandler={mouseLeaveHandler}
      />
      <Section title='Your Playlists' items={playlists} size='medium' />
      <Section title="Editor's picks" items={featured} size='medium' />
    </div>
  );
};

export default Home;
