import Card from 'components/card'
import styles from 'assets/styles/section.module.scss'

const Section = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <div className={styles.cards}>
        {items.map(item => {
          return (
            <Card
              image={item.image}
              title={item.title}
              size='small'
            />
          )
        })}
      </div>
    </section>
  )
}

export default Section
