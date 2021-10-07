const express = require('express')
const spotifyWepApi = require('spotify-web-api-node')
const dotenv = require('dotenv')

dotenv.config()

const router = express.Router()

const spotiApi = new spotifyWepApi({
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

router.post('/', (req,res) => {
  const code = req.body.Authorization

  spotiApi.authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
    })
  })
  .catch(err => {
    res.sendStatus(400).send(err)
  })
})

module.exports = router