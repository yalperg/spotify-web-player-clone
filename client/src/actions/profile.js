import * as api from 'api'
import { profileActions } from 'store/profile-slice'

export const getProfile = (id) => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchProfile(accessToken, id)
    dispatch(profileActions.replaceProfile(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const getProfilePlaylists = (id) => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.fetchProfilePlaylists(accessToken, id) 
    dispatch(profileActions.replaceProfilePlaylists(data))
  } catch (error) {
    console.log(error)
  }
}