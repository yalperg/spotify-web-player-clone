import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from 'assets/styles/card.module.scss'
import { PauseIcon, PlayIcon } from 'assets/icons/icons'

const Card = ({ id, image, title, creator, size = 'medium', mouseEnterHandler, mouseLeaveHandler }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playHandler = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    size === 'small' ? (
    <div className={styles[size]} onMouseEnter={() => mouseEnterHandler(image)} onMouseLeave={mouseLeaveHandler}>
      <Link to={`/playlist/${id}`}>
        <img src={image} alt={title} />
        <span>{title}</span>
        {size === 'medium' ? <p>-{creator}</p> : null}
      </Link>
      <button className={styles.play} onClick={playHandler}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
    ) : (
    <div className={styles[size]}>
      <Link to={`/playlist/${id}`}>
        <img src={image} alt={title} />
        <span>{title}</span>
        {size === 'medium' ? <p>-{creator}</p> : null}
      </Link>
      <button className={styles.play} onClick={playHandler}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
    )
  )
}

export default Card
