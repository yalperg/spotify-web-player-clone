import instance from './axiosConfig';

export const fecthUser = () => {
  return instance.get('me/');
};

export const fetchUsersPlaylists = () => {
  return instance.get('me/playlists');
};

export const fetchUsersTops = type => {
  return instance.get(`me/top/${type}?limit=50&time_range=long_term`);
};

export const fetchFeatured = () => {
  return instance.get(`browse/featured-playlists`);
};

export const fetchProfile = id => {
  return instance.get(`users/${id}`);
};

export const fetchProfilePlaylists = id => {
  return instance.get(`users/${id}/playlists`);
};

export const search = query => {
  return instance.get(`search?q=${query}&type=artist,album,track`);
};

export const fetchRecentTrack = () => {
  return instance.get(`me/player/recently-played?limit=1`);
};

export const fetchPlaylist = id => {
  return instance.get(`playlists/${id}`);
};
