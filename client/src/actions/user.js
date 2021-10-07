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
