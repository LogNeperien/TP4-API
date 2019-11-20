var express = require('express');
var router = express.Router();
var _ = require('lodash');
const axios = require('axios').default;

var mesFilms = [];

/* UN OBJET FILM
{
  id: String,
  movie: String,
  yearOfRelease: Number,
  duration: Number // en minutes,
  actors: [String, String],
  poster: String // lien vers une image d'affiche,
  boxOffice: Number // en USD$,
  rottenTomatoesScore: Number
 }
 */

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

    const {nomFilm} = req.body;
    const id = _.uniqueId();
    
    axios({
      method : 'get',
      url: `http://www.omdbapi.com/?t=${nomFilm}&apikey=6a6bd0f4`,
      responseType: 'json'

    })
    .then(function(response)
    {
      yearOfRelease = response.data.Year;
      duration =  response.data.Runtime;
      actors = response.data.Actors;
      poster =  response.data.Poster;
      boxOffice = response.data.BoxOffice;
      rottenTomatoesScore = response.data.Ratings[2].Value;

      
      mesFilms.push({nomFilm, yearOfRelease, duration, actors, poster, boxOffice, rottenTomatoesScore,id});

      console.log( `Le film ${id} est ajouté`)
    });
    
    //res.status(200).json({
    //    message : `Le film ${id} est ajouté`,
    //    film
    //});
});

// POST localhost:3000/movies/:id -- Update un film via son id
router.post('/:id', (req, res) => {
    const { id } = req.params;

    // Get the new data of the user we want to update from the body of the request
    const {nomFilm, yearOfRelease, duration, actors, poster, boxOffice, rottenTomatoesScore} = req.body;

    // Find in DB
    const filmUpdate = _.find(mesFilms, ["id", id]);

    // Update data with new data (js is by address)
    filmUpdate.nomFilm = nomFilm;
    filmUpdate.yearOfRelease = yearOfRelease;
    filmUpdate.duration = duration;
    filmUpdate.actors = actors;
    filmUpdate.poster = poster;
    filmUpdate.boxOffice = boxOffice;
    filmUpdate.rottenTomatoesScore = rottenTomatoesScore;
  
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