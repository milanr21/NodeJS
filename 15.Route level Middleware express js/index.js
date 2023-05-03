const express = require('express');
const app = express();

const reqFilter = require('./middleware');

const route = express.Router();

route.use(reqFilter);
// app.use(reqFilter);

app.get('/', (req, resp) => {
  resp.send('Welcome to homepage');
});

app.get('/users', (req, resp) => {
  resp.send('Welcome to the users page');
});

route.get('/about', (req, resp) => {
  resp.send('Welcome to the about page');
});

route.get('/contact', (req, resp) => {
  resp.send('Welcome to the contact page');
});

app.get('/services', (req, resp) => {
  resp.send('Welcome to the services page');
});

app.use('/', route);

app.listen(4000);
