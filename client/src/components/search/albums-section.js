import { useState } from 'react'
import Card from 'components/card'
import styles from 'assets/styles/section.module.scss'

const AlbumsSection = ({ title, items }) => {
  const [limit, setLimit] = useState(7)

  const onClickHandler = () => {
    if(limit === 7) {
      setLimit(20)
    } else {
      setLimit(7)
    }
  } 

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>{title}</h1>
        {items.length > 7 ? <span onClick={onClickHandler}>{limit === 7 ? 'See More' : 'See Less'}</span> : null}
      </div>
      <div className={`${styles.cards} ${styles.medium}`}>
        {items
          .filter((item, index) => index < limit)
          .map(item => {
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
