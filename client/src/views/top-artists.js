import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTops } from 'actions/user'
import Artist from 'components/artist'

import styles from 'assets/styles/top-artists.module.scss'

const Artists = () => {
  const { tops } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersTops('artists'))
  }, [dispatch])

  console.log(tops.artists)
  return (
    <div className={styles.topArtists}>
      {tops.artists.map((artist, index) => <Artist key={index} artist={artist} index={index} />)}
    </div>
  )
}

export default Artists
