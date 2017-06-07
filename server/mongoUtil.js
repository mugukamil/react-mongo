const mongo = require('mongodb')
const client = mongo.MongoClient
let _db

module.exports = {
    objectId() {
        return client.ObjectID
    },

    connect() {
        client.connect('mongodb://localhost:27017/react-comments', (err, db) => {
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