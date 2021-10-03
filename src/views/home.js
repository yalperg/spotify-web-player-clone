import styles from 'assets/styles/home.module.scss'
import Section from 'components/section'

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
  }
]

const Home = () => {
  return (
    <div className={styles.home}>
      <Section title='Good Evening' items={DUMMY_DATA} />
    </div>
  )
}

export default Home
