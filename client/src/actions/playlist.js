import * as api from 'api';
import { playlistActions } from 'store/playlist-slice';

export const getPlaylist = id => async dispatch => {
  try {
    const { data } = await api.fetchPlaylist(id);
    dispatch(playlistActions.replacePlaylist(data));
  } catch (error) {
    console.log(error);
  }
};
