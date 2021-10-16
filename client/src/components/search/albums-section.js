import Card from 'components/card'
import styles from 'assets/styles/section.module.scss'

const AlbumsSection = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={`${styles.cards} ${styles.medium}`}>
        {items.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.images[0]?.url}
              title={item.name}
              creator={item.artists.map(artist => artist.name).join(', ')}
              size='medium'
            />
          )
        })}
      </div>
    </section>
  )
}

export default AlbumsSection
