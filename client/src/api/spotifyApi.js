import axios from 'axios';

const accessToken = sessionStorage.getItem('access_token');

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default spotifyApi;
