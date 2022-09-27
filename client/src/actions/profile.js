import * as api from 'api';
import { profileActions } from 'store/profile-slice';

export const getProfile = id => async dispatch => {
  try {
    const { data } = await api.fetchProfile(id);
    dispatch(profileActions.replaceProfile(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getProfilePlaylists = id => async dispatch => {
  try {
    const { data } = await api.fetchProfilePlaylists(id);
    dispatch(profileActions.replaceProfilePlaylists(data));
  } catch (error) {
    console.log(error);
  }
};
