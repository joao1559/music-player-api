require('dotenv').config({ path: '.env' });
const { ObjectId } = require('bson');
const db = require('../../config/database')

class UserRepository {
    // Funções de acesso ao banco
    async login(params) {
        const collection = await db.initMongo()
        return collection.findOne(params)
    }

    async post(params) {
        const collection = await db.initMongo()
        await collection.insertOne(params)
    }

    async getById(id) {
        const collection = await db.initMongo()
        return collection.findOne({'_id': ObjectId(id)})
    }
}

module.exports = new UserRepository();