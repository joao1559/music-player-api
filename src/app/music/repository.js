require('dotenv').config({ path: '.env' });
const db = require('../../config/database')

class MusicRepository {
    // Funções de acesso ao banco
    async get(params) {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('music')
        const musics = await collection.find({ $text: { $search: params.search } }).toArray()
        await client.close()
        return musics

    }

    async getRecommended() {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('music')
        const musics = await collection.find().limit(5).toArray()
        await client.close()
        return musics
    }
}

module.exports = new MusicRepository();