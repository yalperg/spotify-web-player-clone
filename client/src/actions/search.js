import * as api from 'api';
import { searchActions } from 'store/search-slice';

export const searchData = query => async dispatch => {
  try {
    const { data } = await api.search(query);
    dispatch(searchActions.replaceSearch(data));
  } catch (error) {
    console.log(error.message);
  }
};
