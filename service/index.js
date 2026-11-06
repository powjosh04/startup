const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));

const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);

//Temporary in-memory storage for users and food events
const users = [];
let foodEvents = [];

//Cookie configuration
const authCookieName = 'token';

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: false, // change to true in production
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Create a new user
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email,
    password: passwordHash,
    token: uuid.v4(),
  };

  users.push(user);

  return user;
}

//Find user
async function findUser(field, value) {
  return users.find((user) => user[field] === value);
}

//Create account endpoint
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({
      msg: 'Existing user',
    });
  } else {
    const user = await createUser(
      req.body.email,
      req.body.password
    );

    setAuthCookie(res, user.token);

    res.send({
      email: user.email,
    });
  }
});

//Login endpoint
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser(
    'email',
    req.body.email
  );

  if (
    user &&
    (await bcrypt.compare(
      req.body.password,
      user.password
    ))
  ) {
    user.token = uuid.v4();

    setAuthCookie(res, user.token);

    res.send({
      email: user.email,
    });

    return;
  }

  res.status(401).send({
    msg: 'Unauthorized',
  });
});

//logout endpoint
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser(
    'token',
    req.cookies[authCookieName]
  );

  if (user) {
    delete user.token;
  }

  res.clearCookie(authCookieName);

  res.status(204).end();
});

//Authorization middleware
const verifyAuth = async (req, res, next) => {
  const user = await findUser(
    'token',
    req.cookies[authCookieName]
  );

  if (user) {
    next();
  } else {
    res.status(401).send({
      msg: 'Unauthorized',
    });
  }
};

//Get food events endpoint
apiRouter.get('/events', verifyAuth, (req, res) => {
  res.send(foodEvents);
});

//create food event endpoint
apiRouter.post('/events', verifyAuth, (req, res) => {
  const event = {
    id: uuid.v4(),
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    imageUrl: req.body.imageUrl,
    votes: 0,
    createdAt: new Date(),
  };

  foodEvents.push(event);

  res.send(event);
});

//delete food event endpoint
apiRouter.delete('/events/:id', verifyAuth, (req, res) => {
  foodEvents = foodEvents.filter(
    (event) => event.id !== req.params.id
  );

  res.status(204).end();
});

//error handler
app.use((err, req, res, next) => {
  res.status(500).send({
    type: err.name,
    message: err.message,
  });
});

//fallback route
app.use((_req, res) => {
  res.sendFile('index.html', {
    root: 'public',
  });
});