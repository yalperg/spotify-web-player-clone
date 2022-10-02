import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTops } from 'actions/user'
import Artist from 'components/artist'

import styles from 'assets/styles/layout/container.module.scss'

const Artists = () => {
  const { tops } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersTops('artists'))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your most listened artists</h1>
      {tops.artists.map((artist, index) => <Artist key={index} artist={artist} index={index} />)}
    </div>
  )
}

export default Artists
