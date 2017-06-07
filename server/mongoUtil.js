const mongo = require('mongodb')
const client = mongo.MongoClient
let _db

module.exports = {
    objectId() {
        return client.ObjectID
    },

    connect() {
        client.connect('mongodb://heroku_jclzrvx9:oj56cvno34isckig6dotsfluup@ds111622.mlab.com:11622/heroku_jclzrvx9', (err, db) => {
            if (err) {
                console.log(`Error connecting to mongo ${err}`)
                process.exit(1)
            }

            _db = db

            console.log(`connected to mongo`);
        })
    },

    comments() {
        return _db.collection('comments')
    }
}
