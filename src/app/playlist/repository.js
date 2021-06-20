require('dotenv').config({ path: '.env' });
const db = require('../../config/database')

class PlaylistRepository {
    // Funções de acesso ao banco
    async getTop() {
        const collection = (await db.initMongo()).db(process.env.MONGODB_DATABASE).collection('playlist');
        let query = { type: 1 };
        return collection.find(query).toArray()
    }

    async getByUser(user) {
        const collection = (await db.initMongo()).db(process.env.MONGODB_DATABASE).collection('playlist');
        let query = { ownedBy: user._id };
        return collection.find(query, {projection: {ownedBy: 0, type: 0}}).toArray()
    }
}

module.exports = new PlaylistRepository();