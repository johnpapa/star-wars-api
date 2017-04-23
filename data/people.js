const Person = require('../models/person');

module.exports = {
  getPeople: getPeople
}

const people = [
  new Person(1, 'BB8', 0),
  new Person(2, 'K2S0', 0),
  new Person(3, 'C3PO', 0),
  new Person(4, 'R2D2', 0),
  new Person(10, 'Jyn Erso', 1),
  new Person(11, 'Cassian Andor', 2),
  new Person(12, 'K-2SO', 3),
  new Person(13, 'Saw Gererra', 4),
  new Person(14, 'Chirrut Îmwe', 5),
  new Person(15, 'Baze Malbus', 5),
  new Person(16, 'Bodhi Rook', 5),
  new Person(17, 'Mon Mothma', 6),
  new Person(18, 'Galen Erso', 7),
  new Person(19, 'Bail Organa', 8),
  new Person(20, 'Leia Organa', 8),
  new Person(21, 'Lyra Erso', 9)
];

function getPeople() {
  return people;
}
