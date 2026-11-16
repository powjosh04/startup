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

//Database helpers
async function addEvent(event) {
  await eventCollection.insertOne(event);
}

async function getEvents() {
  return eventCollection.find({}).toArray();
}

async function removeEvent(id) {
  await eventCollection.deleteOne({ id });
}

//Create events
app.post('/api/events', async (req, res) => {
  const event = {
    id: crypto.randomUUID(),
    ...req.body,
    createdAt: new Date(),
  };

  await DB.addEvent(event);

  res.send(event);
});

//Get events
app.get('/api/events', async (req, res) => {
  const events = await DB.getEvents();

  res.send(events);
});

//delete events
app.delete('/api/events/:id', async (req, res) => {
  await DB.removeEvent(req.params.id);

  res.send({ success: true });
});

module.exports = {
  eventCollection,
  userCollection,
};