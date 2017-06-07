const mongo = require('mongodb')
const client = mongo.MongoClient
let _db

module.exports = {
    objectId() {
        return client.ObjectID
    },

    connect() {
        client.connect(process.env.MONGODB_URL, (err, db) => {
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
