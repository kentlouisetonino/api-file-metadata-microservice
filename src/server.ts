require('dotenv').config()
import cors from 'cors'
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import FileRouter from './router/FileRouter'
import HomeRouter from './router/HomeRouter'

const PORT = process.env.PORT
const app = express()

// * listen for requests
app.listen(PORT, function () {
  console.log('Server is live at http://localhost:' + PORT)
})

// * middlewares
app.use(morgan('tiny'))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors({ optionsSuccessStatus: 200 }))
app.use(express.static('public'))

// * endpoints
app.use('/', HomeRouter)
app.use('/api', FileRouter)
