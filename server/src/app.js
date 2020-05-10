const express = require('express')
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

const Post = require("../models/post");
const User = require('../models/user');

// Fetch single post
app.get('/post/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            res.send(error)
        }
        res.send(post)
    })
})

// Update a post
app.put('/posts/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            res.send(error)
        }

        post.title = req.body.title
        post.description = req.body.description
        post.save(function (error) {
            if (error) {
                res.send(error)
            }
            res.send({
                success: true
            })
        })
    })
})

// Register new user
app.post('/register', (req, res) => {
    const db = req.db;
    let email = req.body.email;
    let password = Bcrypt.hashSync(req.body.password, 10);
    let new_user = new User({
        email: email,
        password: password
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
})

// User log in
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(400).send({message: 'User not found.'});
        }
        if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({message: 'Invalid password.'});
        }
        res.send({ message: "Logged in." });
    } catch (e) {
        res.status(500).send(e)
    }
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
    var db = req.db;
    Post.remove({
        _id: req.params.id
    }, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
})

app.listen(process.env.PORT || 8081)
