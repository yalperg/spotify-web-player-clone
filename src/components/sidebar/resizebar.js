import { useCallback, useState } from 'react'
import styles from 'assets/styles/resizebar.module.scss'

const ResizeBar = ({ children }) => {
  const [size, setSize] = useState()

  const mouseMoveHandler = e => {
    console.log(e.clientX)
    setSize(e.clientX)
  }

  const mouseUpHandler = useCallback(() => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  const mouseDownHandler = useCallback(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div
      className={styles.resizebar}
      style={{ width: size }}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}>
      {children}
      <div className={styles.border}></div>
    </div>
  )
}

export default ResizeBar
