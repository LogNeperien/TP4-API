const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();

// Create RAW data array
let movie = [{
  Title: "Arthur",
  Year: "2012",
  RunTime: "142 min",
  Genre: "Action",
  Actors: "Stanley Tucci, Wes Bentley",
  Plot: "Blablabla",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg"
}];

/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  res.status(200).json({ users });
});

/* GET one user. */
router.get('/:Title', (req, res) => {
  const { Title } = req.params;
  // Find user in DB
  const user = _.find(users, ["Title", Title]);
  // Return user
  res.status(200).json({
    message: 'User found!',
    user 
  });
});

/* PUT new user. */
router.put('/', (req, res) => {
  // Get the data from request from request
  const { user } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  users.push({ user, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    user: { user, id }
  });
});

/* DELETE user. */
router.delete('/:id', (req, res) => {
  // Get the :id of the user we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(users, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE user. */
router.post('/:id', (req, res) => {
  // Get the :id of the user we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the user we want to update from the body of the request
  const { user } = req.body;
  // Find in DB
  const userToUpdate = _.find(users, ["id", id]);
  // Update data with new data (js is by address)
  userToUpdate.user = user;

  // Return message
  res.json({
    message: `Just updated ${id} with ${user}`
  });
});

module.exports = router;
