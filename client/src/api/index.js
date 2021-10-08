import axios from 'axios'

export const fecthUser = async accessToken => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const response = await axios.get('https://api.spotify.com/v1/me/', { headers })
  return response
}

export const fetchUsersPlaylists = async accessToken => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const response = await axios.get('https://api.spotify.com/v1/me/playlists', { headers })
  return response
}

export const fetchUsersTops = async (accessToken, type) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const response = await axios.get(`https://api.spotify.com/v1/me/top/${type}`, { headers })
  return response
}
