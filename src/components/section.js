import Card from 'components/card'
import styles from 'assets/styles/section.module.scss'

const Section = ({ title, items, size, mouseEnterHandler, mouseLeaveHandler }) => {

  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={`${styles.cards} ${size === 'small' ? styles.small : styles.medium}`}>
        {items.map((item) => {
          return (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              creator={item.creator}
              size={size}
              mouseEnterHandler={mouseEnterHandler} 
              mouseLeaveHandler={mouseLeaveHandler}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Section
