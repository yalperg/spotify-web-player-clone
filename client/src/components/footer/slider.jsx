import styles from 'assets/styles/components/slider.module.scss'

const Slider = ({ range, setRange, sm = false }) => {
  const rangeHandler = (e) => {
    setRange(e.target.value)
  }

  return ( 
    <input className={sm ? `${styles.slider} ${styles.sm}` : styles.slider } type='range' min="0" max="120" value={range} onChange={rangeHandler} />
   )
}
 
export default Slider