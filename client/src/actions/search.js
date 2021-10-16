import * as api from 'api'
import { searchActions } from 'store/search-slice'

export const searchData = (query) => async dispatch => {
  const accessToken = sessionStorage.getItem('access_token')

  try {
    const { data } = await api.search(accessToken, query) 
    dispatch(searchActions.replaceSearch(data))
  } catch (error) {
    console.log(error.message)
  }
}