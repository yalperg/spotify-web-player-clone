import Card from 'components/card'
import styles from 'assets/styles/section.module.scss'

const ArtistsSection = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={`${styles.cards} ${styles.medium}`}>
        {items.length ? (
          items.map(item => {
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
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  )
}

export default ArtistsSection
