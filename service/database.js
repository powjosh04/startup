const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url =
  `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('studentSustenance');

const eventCollection = db.collection('events');
const userCollection = db.collection('users');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log('Connected to MongoDB');
})();

module.exports = {
  eventCollection,
  userCollection,
};

