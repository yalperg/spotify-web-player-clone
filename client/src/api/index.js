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

  const response = await axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=long_term`, { headers })
  return response
}

export const fetchFeatured = async accessToken => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const response = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists`, { headers })
  return response
}

