require('dotenv').config({ path: '.env' });

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.xmnzf.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

class UserRepository {
    // Funções de acesso ao banco
    async login(params) {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const collection = client.db(process.env.MONGODB_DATABASE).collection(process.env.MONGODB_COLLECTION);

        return collection.findOne(params)
    }

    async post(params) {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const collection = client.db(process.env.MONGODB_DATABASE).collection(process.env.MONGODB_COLLECTION);

        await collection.insertOne(params)
    }
}

module.exports = new UserRepository();