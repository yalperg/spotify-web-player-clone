import Card from 'components/Card';
import styles from './section.module.scss';

const Section = ({ title, items, size, mouseEnterHandler, mouseLeaveHandler, fallbackMessage }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {Boolean(items.length) ? (
        <div className={`${styles.cards} ${size === 'small' ? styles.small : styles.medium}`}>
          {items.map(item => {
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
            );
          })}
        </div>
      ) : (
        <p className={styles.fallbackMessage}>{fallbackMessage}</p>
      )}
    </section>
  );
};

export default Section;
