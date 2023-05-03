const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send('Please Provide Your Age');
  } else if (req.query.age < 18) {
    resp.send('You are not eligible to access the page');
  } else {
    next();
  }
};

app.use(reqFilter);

app.get('/', (req, resp) => {
  resp.send('Welcome to homepage');
});

app.get('/users', (req, resp) => {
  resp.send('Welcome to the users page');
});

app.listen(4000);
