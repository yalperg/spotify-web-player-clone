import styles from 'assets/styles/home.module.scss'
import Section from 'components/section'
import greetings from 'functions/greetings'

const DUMMY_DATA = [
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  },
  {
    image: 'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
    title: 'Random bullshit go ama türkçe',
    creator: 'Yunus Alper Göl'
  }
]

const Home = ( {mouseEnterHandler, mouseLeaveHandler }) => {  
  const greeting = greetings()

  return (
    <div className={styles.home}>
      <Section title={greeting} items={DUMMY_DATA} size='small' mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}  />
      <Section title='Your Playlists' items={DUMMY_DATA} size='medium' mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
      <Section title='Your Podcasts' items={DUMMY_DATA} size='medium' mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler} />
    </div>
  )
}

export default Home
