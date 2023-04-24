const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const postRoutes = require('./backend/postRoutes')
const connectDB = require('./backend/config/db')


const port= process.env.PORT || 3000  // .env file ka data 

const app = express()

connectDB()

// middleware which handles parsing incoming jason  data from front end
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())
// middleware create with routes
app.use('/api/posts',postRoutes)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})