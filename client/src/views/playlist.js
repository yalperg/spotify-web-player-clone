import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getPlaylist } from 'actions/playlist'

import { playlistActions } from 'store/playlist-slice'

const Playlist = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaylist(id))
    return () => {
      dispatch(playlistActions.removePlaylist())
    }
  }, [id, dispatch])

  return ( 
    <div>
      mrb
    </div>
   )
}
 
export default Playlist