require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const session = require ('express-session')
const massive = require('massive')
const a_c = require('./controller')
const port = 3010



const app = express();
app.use(bodyParser.json())


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})


app.post('/api/register', a_c.register)
app.post('/api/login', a_c.login)
app.post('/api/auth/logout', a_c.logout)
app.post('/api/user/:id')
app.get('/api/auth/me')

app.listen(port, () => console.log(`server running ${port}`))