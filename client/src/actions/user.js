import * as api from 'api';
import { userActions } from 'store/user-slice';

export const getUser = () => async dispatch => {
  try {
    const { data } = await api.fecthUser();
    dispatch(userActions.replaceUser(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersPlaylists = () => async dispatch => {
  try {
    const { data } = await api.fetchUsersPlaylists();
    dispatch(userActions.replacePlaylists(data));
  } catch (error) {
    console.log(error);
  }
};

export const getUsersTops = type => async dispatch => {
  try {
    const { data } = await api.fetchUsersTops(type);
    dispatch(userActions.replaceTops({ data, type: type }));
  } catch (error) {
    console.log(error);
  }
};

export const getFeatured = () => async dispatch => {
  try {
    const { data } = await api.fetchFeatured();
    dispatch(userActions.replaceFeatured(data));
  } catch (error) {
    console.log(error);
  }
};

export const getRecentTrack = () => async dispatch => {
  try {
    const { data } = await api.fetchRecentTrack();
    dispatch(userActions.replaceRecentTrack(data));
  } catch (error) {
    console.log(error);
  }
};
