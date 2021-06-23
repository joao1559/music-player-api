require('dotenv').config({ path: '.env' });
const { ObjectId } = require('bson');
const db = require('../../config/database')

class UserRepository {
    // Funções de acesso ao banco
    async login(params) {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('user')
        const user = await collection.findOne(params)
        await client.close()
        return user
    }

    async post(params) {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('user')
        await collection.insertOne(params)
        await client.close()
    }

    async getById(id) {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('user')
        return collection.findOne({'_id': ObjectId(id)})
    }
}

module.exports = new UserRepository();