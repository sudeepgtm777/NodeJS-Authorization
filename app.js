const express = require('express');
const app = express();
const { authPage, authCourse } = require('./appModel');

app.use(express.json());

app.get('/home', (req, res) => {
  res.json('You are on Home page');
});

app.get('/course/grades', authPage('admin', 'host'), (req, res) => {
  res.json({
    Shyam: 70,
    Brandy: 80,
    Naresh: 40,
    Suresh: 55,
  });
});

app.get('/course/:number', authCourse, (req, res) => {
  const courseNumber = req.params.number;
  res.json(`'You have the permission to see the course ${courseNumber}'`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
