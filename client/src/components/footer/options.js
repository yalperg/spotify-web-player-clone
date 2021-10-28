import { useState } from 'react'
import styles from 'assets/styles/components/options.module.scss'
import { AddIcon, ConnectIcon, VolumeIcon } from 'assets/icons/icons'
import Slider from 'components/footer/slider'

const Options = () => {
  const [range, setRange] = useState(50)

  return (
    <div className={styles.options}>
      <AddIcon />
      <ConnectIcon />
      <VolumeIcon />
      <Slider sm={true} range={range} setRange={setRange} />
    </div>
  )
}

export default Options
