const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    '<h1 style="text-align: center;" >Hello, This is the Home Page</h1>'
  );
});

app.get('/about', (req, res) => {
  res.send(
    `
    <h1 style="text-align: center;" >Hello, This is the About Page</h1>
    <a href="/services">Go to Services Page</a>
    `
  );
});

app.get('/services', (req, res) => {
  res.send(`
  <label for="username" >UserName</label>
  <input type="text" placeholder="User name" id="username" value="${req.query.name}"  />
  <button>Submit</button>
  `);
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'milan',
      email: 'milan@gmail.com',
    },
    {
      name: 'rahul',
      email: 'rahul@gmail.com',
    },
  ]);
});

app.listen(3000);
