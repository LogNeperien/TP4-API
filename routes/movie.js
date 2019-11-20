var express = require('express');
var router = express.Router();
var _ = require('lodash');

var mesFilms = [];

// GET localhost:3000/movies -- Affiche tout les films
router.get('/', (req, res) => {
    //console.log("Salut je suis dans get film");
    res.status(200).json({mesFilms});
});


// GET localhost:3000/movies/:id -- Affiche un film via son id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  // Find user in DB
    const film = _.find(mesFilms, ["id", id]);
  // Return user
    res.status(200).json({
    message: 'Film found !',
    film 
  });

});

// PUT localhost:3000/movies/ -- Ajoute un film via son nom
router.put('/', (req, res) => {
    const {nomFilm, description} = req.body;
    const id = _.uniqueId();

    mesFilms.push({nomFilm, description, id});

    //console.log("Salut je suis dans put film");

    res.status(200).json({
        message : `Le film ${id} est ajouté`,
        film: {nomFilm, description, id}
    });
});

// POST localhost:3000/movies/:id -- Update un film via son id
router.post('/:id', (req, res) => {
    const { id } = req.params;

    // Get the new data of the user we want to update from the body of the request
    const {nomFilm, description} = req.body;

    console.log(nomFilm);
    console.log(description);

    // Find in DB
    const filmUpdate = _.find(mesFilms, ["id", id]);

    // Update data with new data (js is by address)
    filmUpdate.nomFilm = nomFilm;
    filmUpdate.description = description;
  
    // Return message
    res.json({
      message: `Just updated film ${id}`,
      film : filmUpdate
    });
  
});

// DELETE localhost:3000/movies/:id -- Efface un film via son id
router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(mesFilms, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });

});


module.exports = router;