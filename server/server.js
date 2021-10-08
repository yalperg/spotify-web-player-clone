const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const loginRoutes = require('./routes/login')
const refreshRoutes = require('./routes/refresh')

dotenv.config()

const app = express()
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/login', loginRoutes)
app.use('/refresh', refreshRoutes)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Backend server is runnig')
})

app.listen(PORT, ()=> {
  console.log('Server is runnig')
})