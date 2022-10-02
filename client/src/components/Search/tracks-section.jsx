import { useState } from 'react'
import Track from 'components/track'
import styles from 'assets/styles/layout/section.module.scss'

const TracksSection = ({ title, items }) => {
  const [limit, setLimit] = useState(7)

  const onClickHandler = () => {
    if (limit === 7) {
      setLimit(20)
    } else {
      setLimit(7)
    }
  }

  return (
    <section>
      <div className={styles.title}>
        <h1>{title}</h1>
        {items.length > 7 ? (
          <span onClick={onClickHandler}>
            {limit === 7 ? 'See More' : 'See Less'}
          </span>
        ) : null}
      </div>
      <div className={`${styles.cards} ${styles.medium}`}>
        {items.filter((item, index) => index < limit).map((item, index) => {
            return <Track key={item.id} track={item} index={index} type="Search" />
          })}
      </div>
    </section>
  )
}

export default TracksSection
