const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type', 'Authorization'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
}

const path = require('path')
const multer = require('multer')
const upload = multer()
const dotenv = require('dotenv')
dotenv.config()
const helmet = require('helmet')

const apiRoute = '/api'
const userRoutes = require('./routes/user')
const cvRoutes = require('./routes/cv')

const app = express()

// mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.apwibmo.mongodb.net/portfolio?retryWrites=true&w=majority
// mongodb://localhost:27017/portfolio?authMechanism=DEFAULT   LOCAL MONGODB COMPASS

// connect to mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.apwibmo.mongodb.net/portfolio?retryWrites=true&w=majority `,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connection to MongoDB successful !'))
  .catch(() => console.log('Connection to MongoDB failed !'))

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', cvRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))

module.exports = app
