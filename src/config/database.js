require('dotenv').config({ path: '.env' });
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.xmnzf.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

async function initMongo() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.connect();
}

module.exports = { initMongo }