const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const usersRoutes = require('../routes/users')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const jwtMiddleware = expressJwt({
    secret: 'rysiek123'
});

mongoose.connect('mongodb://localhost:27017/store_demo', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(usersRoutes);

app.listen(process.env.PORT || 8081)
