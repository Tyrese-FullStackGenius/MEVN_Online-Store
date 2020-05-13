const express = require('express')
const {check, validationResult} = require('express-validator/check')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const Bcrypt = require("bcryptjs");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/store_demo');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection Succeeded");
});

const User = require('../models/user');

// Register new user
app.post('/register', [
    check('email').exists().withMessage('Email field is required').isEmail().withMessage('Invalid email format'),
    check('password', 'Password needs to be at least 5 characters long.')
        .isLength({min: 5})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    let email = req.body.email;
    User.findOne({ email: email }).then(user => {
        if (user) {
            return res.status(400).send({message: 'User with given email already exists.'});
        }
        return Bcrypt.hash(req.body.password, 12);
    }).then(hashedPassword => {
        let new_user = new User({
            email: email,
            password: hashedPassword
        })
        new_user.save(error => {
            if (error) {
                res.send(error)
            }
            res.send({
                success: true,
                message: 'User has been registered'
            })
        })
    }).catch(error => console.log(error))
})

// User log in
app.post('/login', [
    check('email').isEmail().withMessage('Invalid email format'),
    check('password', 'Password field is required.').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    try {
        const user = await User.findOne({email: req.body.email}).exec();
        if (!user) {
            return res.status(400).send({message: 'User not found.'});
        }
        if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({message: 'Invalid password.'});
        }
        res.send({message: "Logged in."});
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(process.env.PORT || 8081)
