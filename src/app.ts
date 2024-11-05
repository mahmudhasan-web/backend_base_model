/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import mongoose from "mongoose"

import router from './app/routes'
import env from 'dotenv'
import { PORT } from './secrets'

const app: Application = express()

//parsers
app.use(express.json())
// app.use(cookieParser())

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
  }),
)






// application routes
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log('server is running')
})





export default app
