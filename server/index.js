require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const session = require ('express-session')
const massive = require('massive')
const a_c = require('./controller')
const port = 3010



const app = express();
app.use(bodyParser.json())

app.post('/api/register', a_c.register)
app.post('/api/login', a_c.login)





massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.listen(port, () => console.log(`server running ${port}`))