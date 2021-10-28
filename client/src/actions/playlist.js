import * as api from 'api'
import { playlistActions } from 'store/playlist-slice'

export const getPlaylist = (id) => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchPlaylist(accessToken, id)
    dispatch(playlistActions.replacePlaylist(data))
  } catch (error) {
    console.log(error)
  }
}