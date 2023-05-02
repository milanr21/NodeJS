const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    '<h1 style="text-align: center;" >Hello, This is the Home Page</h1>' +
    <h1>req.query.name</h1>
  );
});

app.get('/about', (req, res) => {
  res.send(
    '<h1 style="text-align: center;" >Hello, This is the About Page</h1>'
  );
});

app.get('/services', (req, res) => {
  res.send(
    '<h1 style="text-align: center;" >Hello, This is the Service Page</h1>'
  );
});

app.listen(3000);
