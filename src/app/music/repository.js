require('dotenv').config({ path: '.env' });
const db = require('../../config/database')

class MusicRepository {
    // Funções de acesso ao banco
    async get(params) {
        const collection = (await db.initMongo()).db(process.env.MONGODB_DATABASE).collection('music');
        return collection.find({ $text: { $search: params.search } }, {projection: {name: 1}}).toArray()
    }
}

module.exports = new MusicRepository();