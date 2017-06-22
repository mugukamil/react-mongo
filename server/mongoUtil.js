const mongo = require('mongodb')
const client = mongo.MongoClient
let _db

module.exports = {
    objectId() {
        return client.ObjectID
    },

    connect() {
<<<<<<< HEAD
        client.connect('mongodb://heroku_jclzrvx9:oj56cvno34isckig6dotsfluup@ds111622.mlab.com:11622/heroku_jclzrvx9', (err, db) => {
            if (err) {
                console.log(`Error connecting to mongo ${err}`)
=======
        client.connect('mongodb://localhost:27017/react-comments', (err, db) => {
            if (err) {
                console.log(`Error connecting to mongo ${err}`)
>>>>>>> 5615817c9e6732254d7d9c613ad1c62ebc29bee9
                process.exit(1)
            }

            _db = db

            console.log(`connected to mongo`);
        })
    },

    comments() {
        return _db.collection('comments')
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 5615817c9e6732254d7d9c613ad1c62ebc29bee9
