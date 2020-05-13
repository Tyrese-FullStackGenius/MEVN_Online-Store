const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const usersRoutes = require('../routes/users')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/store_demo', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(usersRoutes);

app.listen(process.env.PORT || 8081)
