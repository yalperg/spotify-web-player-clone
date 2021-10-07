import axios from 'axios'

export const fecthUser = async accessToken => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }

  const response = await axios.get('https://api.spotify.com/v1/me/', { headers })
  return response
}
