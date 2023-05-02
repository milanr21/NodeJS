const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('data sent by browser = > > >', req.query.name);
  res.send(
    '<h1 style="text-align: center;" >Hello, This is the Home Page</h1>'
  );
});
