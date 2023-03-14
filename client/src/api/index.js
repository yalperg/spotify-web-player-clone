import spotifyApi from './spotifyApi';

export const fecthUser = () => {
  return spotifyApi.get('me/');
};

export const fetchUsersPlaylists = () => {
  return spotifyApi.get('me/playlists');
};

export const fetchUsersTops = type => {
  return spotifyApi.get(`me/top/${type}?limit=50&time_range=long_term`);
};

export const fetchFeatured = () => {
  return spotifyApi.get(`browse/featured-playlists`);
};

export const fetchProfile = id => {
  return spotifyApi.get(`users/${id}`);
};

export const fetchProfilePlaylists = id => {
  return spotifyApi.get(`users/${id}/playlists`);
};

export const search = query => {
  return spotifyApi.get(`search?q=${query}&type=artist,album,track`);
};

export const fetchRecentTrack = () => {
  return spotifyApi.get(`me/player/recently-played?limit=1`);
};

export const fetchPlaylist = id => {
  return spotifyApi.get(`playlists/${id}`);
};
