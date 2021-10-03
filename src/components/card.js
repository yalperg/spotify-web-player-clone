import { useState } from 'react'
import styles from 'assets/styles/card.module.scss'
import { PauseIcon, PlayIcon } from 'assets/icons/icons'

const Card = ({ image, title, creator, size = 'medium' }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playHandler = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={styles[size]}>
      <a href='/'>
        <img src={image} alt={title} />
        <span>{title}</span>
        {size === 'medium' ? <p>-{creator}</p> : null}
      </a>
      <button className={styles.play} onClick={playHandler}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  )
}

export default Card
