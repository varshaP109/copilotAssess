// Create web server 
// 1. Create an express server
// 2. Create a route handler for get requests to '/'
// 3. Create a route handler for post requests to '/'
// 4. Create a route handler for get requests to '/comments'
// 5. Create a route handler for get requests to '/comments/:id'
// 6. Create a route handler for put requests to '/comments/:id'
// 7. Create a route handler for delete requests to '/comments/:id'
// 8. Listen on port 3000
// 9. Use body-parser to parse JSON bodies
// 10. Use cors to allow requests from all origins

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const comments = {};

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  res.send(comments[req.params.id]);
});

app.post('/comments', (req, res) => {
  const id = Math.floor(Math.random() * 1000000);
  comments[id] = {
    id,
    content: req.body.content
  };
  res.status(201).send(comments[id]);
});

app.put('/comments/:id', (req, res) => {
  comments[req.params.id] = req.body;
  res.status(200).send(comments[req.params.id]);
});

app.delete('/comments/:id', (req, res) => {
  delete comments[req.params.id];
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});