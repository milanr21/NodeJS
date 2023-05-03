const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

// app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/profile', (_, resp) => {
  const user = {
    name: 'milan rawal',
    email: 'milan@gmail.com',
    city: 'lokanthali',
    skills: ['js', 'node', 'react', 'angular', 'react native', 'c++', 'java'],
  };

  resp.render('profile', { user });
});

app.get('/login', (_, resp) => {
  resp.render('login');
});

app.get('', (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get('/home', (_, resp) => {
  resp.sendFile(`${publicPath}/home.html`);
});

app.get('*', (_, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(3000);
