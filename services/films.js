const Film = require('../models/film');

module.exports = {
  getFilms: getFilms
}

const films = [
  new Film(1, 'The Phantom Menace'),
  new Film(2, 'Attack of the Clones'),
  new Film(3, 'Revenge of the Sith'),
  new Film(4, 'A New Hope'),
  new Film(5, 'Empire Strikes Back'),
  new Film(6, 'Revenge of the Jedi'),
  new Film(7, 'A Force Awakens'),
  new Film(8, 'The Last Jedi'),
  // new Film(9, 'TBA'),
  new Film(10, 'Rogue One')
];

const data = {
  count: films.length,
  results: films
};

function getFilms() {
  return data;
}
