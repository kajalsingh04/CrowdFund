import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
// import xss from 'xss-clean'
import hpp from 'hpp'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
import http from 'http'
import { Server } from 'socket.io'

import connectDB from './config/db.js'

import authRoutes from './routes/authRoutes.js'
import ngoRoutes from './routes/ngoRoutes.js'
import campaignRoutes from './routes/campaignRoutes.js'
import donationRoutes from './routes/donationRoutes.js'
import bookmarkRoutes from './routes/bookmarkRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config()

connectDB()

const app = express()

const server = http.createServer(app)

export const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
})

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({ crossOriginResourcePolicy: false, }))
// app.use(xss())
app.use(hpp())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

app.use(limiter)

app.get('/', (req, res) => {
  res.json({
    message: 'Fundraising Platform API Running',
  })
})

io.on('connection', (socket) => {
  console.log('User Connected:', socket.id)

  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})

app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/ngo', ngoRoutes)
app.use('/api/campaign', campaignRoutes)
app.use('/api/donation', donationRoutes)
app.use('/api/bookmark', bookmarkRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/comment', commentRoutes)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})