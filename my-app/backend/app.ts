import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import middleware from './utils/middleware'
import { blogRouter } from './controllers/blogs'
import { userRouter } from './controllers/users'
import { loginRouter } from './controllers/login'
import { authorRouter } from './controllers/authors'

const app = express()

app.use(express.json())
process.env.NODE_ENV != 'test' && app.use(middleware.requestLogger)
app.use(cors())

app.use('/blogs', blogRouter)
app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/authors', authorRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

export default app
