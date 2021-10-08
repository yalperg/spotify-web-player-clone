import * as api from 'api'
import { userActions } from 'store/user-slice'

export const getUser = () => async dispatch => {
  const accessToken = localStorage.getItem('access_token')

  try {
    const { data } = await api.fecthUser(accessToken)
    dispatch(userActions.replaceUser(data))
  } catch (error) {
    console.log(error.message)
  }
}

export const getUsersPlaylists = () => async dispatch => {
  const accessToken = localStorage.getItem('access_token')

  try {
    const { data } = await api.fetchUsersPlaylists(accessToken) 
    dispatch(userActions.replacePlaylists(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUsersTops = (type) => async dispatch => {
  const accessToken = localStorage.getItem('access_token')

  try {
    const { data } = await api.fetchUsersTops(accessToken, type) 
    dispatch(userActions.replaceTops(data))
  } catch (error) {
    console.log(error)
  }
}
