import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylist } from 'actions/playlist'

import { playlistActions } from 'store/playlist-slice'

import styles from 'assets/styles/layout/container.module.scss'
import PlaylistTop from 'components/playlist-top'

const Playlist = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { playlist } = useSelector(state => state.playlist)

  useEffect(() => {
    dispatch(getPlaylist(id))
    return () => {
      dispatch(playlistActions.removePlaylist())
    }
  }, [id, dispatch])

  console.log(playlist)
  return ( 
    <div className={styles.container}>
      <PlaylistTop playlist={playlist} />
    </div>
   )
}
 
export default Playlist