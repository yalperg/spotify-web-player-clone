import { useState } from 'react'
import styles from 'assets/styles/components/player.module.scss'
import convert from 'functions/seconds-to-min'
import { NextSongIcon, PlayIcon, PauseIcon, PrevSongIcon, RepeatIcon, ShuffleIcon } from 'assets/icons/icons'

const Player = () => {
  const [range, setRange] = useState(50)
  const [isPlaying, setPlaying] = useState(false)

  const rangeHandler = (e) => {
    setRange(e.target.value)
  }

  return (
    <div className={styles.player}>
      <div className={styles.menu}>
        <ShuffleIcon />
        <PrevSongIcon />
        <div className={styles.playBtn} onClick={() => setPlaying(!isPlaying)}>
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </div>
        <NextSongIcon />
        <RepeatIcon />
      </div>
      <div className={styles.sliderContainer}>
        <span>{convert(range)}</span>
        <input className={styles.slider} type='range' min="0" max="120" value={range} onChange={rangeHandler} />
        <span>2:00</span>
      </div>
    </div>
  )
}

export default Player
