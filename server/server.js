const express = require('express')
const app = express()

const mongoUtil = require('./mongoUtil')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

mongoUtil.connect()

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
    next()
})

app.get('/api/comments', (req, res) => {
    let comments = mongoUtil.comments()

    comments.find().toArray((err, docs) => {
        if (err) {
            res.sendStatus(400)
        }

        res.json(docs)
    })
})

app.post('/api/comments', jsonParser, (req, res) => {
    let newComment = req.body || {}

    if (!newComment.author || !newComment.body) {
        console.log(newComment);
        res.sendStatus(400)
    }

    let comments = mongoUtil.comments()
    // let query = { _id: commentId }
    // let update = { $push: { newComment } }

    comments.insertOne(newComment, (err, result) => {
        if (err) {
            res.sendStatus(400)
        }

        console.log('from insertone', result.ops);

        res.sendStatus(201)
    })
})

app.delete('/api/comments/:id', jsonParser, (req, res) => {
    let commentId = req.params.id

    console.log(commentId)

    if (!commentId) {
        res.sendStatus(400)
    }

    let comments = mongoUtil.comments()
    // let query = { _id: commentId }
    // let update = { $push: { newComment } }

    comments.deleteOne(mongoUtil.objectId(commentId), (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(400)
        }

        res.sendStatus(200)
    })
})

app.listen(3001, () => console.log('listening on 3001'))