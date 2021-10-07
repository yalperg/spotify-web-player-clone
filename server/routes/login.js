const express = require('express')
const spotifyWepApi = require('spotify-web-api-node')
const dotenv = require('dotenv')

dotenv.config()

const router = express.Router()


const redirect_uri = 'http://localhost:3000'

const spotiApi = new spotifyWepApi({
  redirectUri: redirect_uri,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

router.post('/', (req,res) => {
  const code = req.body.headers.Authorization

  spotiApi.authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch(err => {
    res.sendStatus(400).send(err)
  })
})

module.exports = router