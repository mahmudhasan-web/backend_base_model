/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'
import { PORT } from './secrets'
import { PrismaClient } from '@prisma/client'

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

const prisma = new PrismaClient()

async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabaseConnection()



// application routes
app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log('server is running')
})





export default app
