
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"; 

import LinksRouter from './LinksRouter.js'
import UsersRouter from './UsersRouter.js'
import connectDB from './database.js'
import LinksController from './LinksController.js'

connectDB()
const app = express()
app.use(cors());
app.use(bodyParser.json());

app.use('/links', LinksRouter)
app.use('/users', UsersRouter)
app.get("/:id", LinksController.redirect)

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})