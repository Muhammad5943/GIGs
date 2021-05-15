const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

// Database
const db = require('./config/database')
const app = express()

// Test DB
db.authenticate()
    .then(() => console.log("Database Connected..."))
    .catch(err => console.log("Error: " + err))

app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>')
})

// router
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.port || 5000

app.listen(PORT, () => {
    console.info(`Server listen on port http://localhost:${PORT}`);
})
