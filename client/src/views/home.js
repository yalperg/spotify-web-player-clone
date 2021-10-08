import styles from 'assets/styles/home.module.scss'
import Section from 'components/section'
import greetings from 'functions/greetings'

import { useSelector } from 'react-redux'

const Home = ( {mouseEnterHandler, mouseLeaveHandler }) => { 
  const { playlists } = useSelector(state => state.user)
  
  const greeting = greetings()
  return (
    <div className={styles.home}>
      <Section title={greeting} items={playlists} size='small' mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}  />
      <Section title='Your Playlists' items={playlists} size='medium' />
      <Section title='Your Shows' items={playlists}  size='medium' />
    </div>
  )
}

export default Home
