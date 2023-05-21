require('dotenv').config()
const express = require('express')
const DownloadRouter = require('./Routers/DownloadRouter')

const PORT = process.env.PORT || 8003
const app = express()

app.use(DownloadRouter)


app.listen(PORT, () => {console.log(`Listening ${PORT}`)})

