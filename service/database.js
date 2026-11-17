const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('studentSustenance');

const userCollection = db.collection('users');
const eventCollection = db.collection('events');

(async function testConnection() {
  try {
    await client.connect();
    await db.command({ ping: 1 });

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

// ===== USERS =====

function getUser(email) {
  return userCollection.findOne({ email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne(
    { email: user.email },
    { $set: user }
  );
}

async function removeUserToken(token) {
  await userCollection.updateOne(
    { token },
    { $unset: { token: 1 } }
  );
}

// ===== EVENTS =====

async function addEvent(event) {
  await eventCollection.insertOne(event);
}

function getEvents() {
  return eventCollection.find({}).toArray();
}

async function removeEvent(id) {
  await eventCollection.deleteOne({ id });
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  removeUserToken,
  addEvent,
  getEvents,
  removeEvent,
};