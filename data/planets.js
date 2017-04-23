const Planet = require('../models/planet');

module.exports = {
  getPlanets: getPlanets
}

const planets = [
  new Planet(1, 'Vallt'),
  new Planet(2, 'Fest'),
  new Planet(3, 'Vulpter'),
  new Planet(4, 'Onderon'),
  new Planet(5, 'Jedha'),
  new Planet(6, 'Chandrila'),
  new Planet(7, 'Grange'),
  new Planet(8, 'Alderaan'),
  new Planet(9, 'Aria Prime')
];

function getPlanets() {
  return planets;
}
