import axios from 'axios';

const accessToken = sessionStorage.getItem('access_token');

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
