import styles from 'assets/styles/container.module.scss'
import Section from 'components/section'
import greetings from 'functions/greetings'

import { useSelector } from 'react-redux'

const Home = ( {mouseEnterHandler, mouseLeaveHandler }) => { 
  const { playlists, featured } = useSelector(state => state.user)
  const greeting = greetings()
  return (
    <div className={styles.container}>
      <Section title={greeting} items={playlists} size='small' mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}  />
      <Section title='Your Playlists' items={playlists} size='medium' />
      <Section title="Editor's picks" items={featured}  size='medium' />
    </div>
  )
}

export default Home
