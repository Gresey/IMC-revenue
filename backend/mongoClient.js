const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URI
const uri = process.env.MONGO_URI;

// Specify the database name
const dbName = 'sample_mflix'; // Replace with your database name

let client;
let db;

async function connectToMongo() {
    if (!client || !client.isConnected()) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    }
    return { client, db };
}

module.exports = { connectToMongo, getDb: () => db };
