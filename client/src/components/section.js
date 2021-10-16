import Card from 'components/card'
import styles from 'assets/styles/layout/section.module.scss'

const Section = ({ title, items, size, mouseEnterHandler, mouseLeaveHandler }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={`${styles.cards} ${size === 'small' ? styles.small : styles.medium}`}>
        {items.length ? items.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.images[0].url}
              title={item.name}
              creator={item.owner.display_name}
              size={size}
              mouseEnterHandler={mouseEnterHandler} 
              mouseLeaveHandler={mouseLeaveHandler}
            />
          )
        }) : <h1>Loading...</h1>}
      </div>
    </section>
  )
}

export default Section
