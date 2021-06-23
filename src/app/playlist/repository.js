require('dotenv').config({ path: '.env' });
const db = require('../../config/database')

class PlaylistRepository {
    // Funções de acesso ao banco
    async getTop() {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('playlist')
        let query = { type: 1 };
        const playlist = await collection.find(query).toArray()
        await client.close()
        return playlist
    }

    async getByUser(user) {
        const client = await db.initMongo()
        const collection = client.db(process.env.MONGODB_DATABASE).collection('playlist')
        let query = { ownedBy: user._id };
        const playlist = await collection.find(query, {projection: {ownedBy: 0, type: 0}}).toArray()
        await client.close()
        return playlist
    }
}

module.exports = new PlaylistRepository();