const Person = require('../models/person');

module.exports = {
  getPeople: getPeople
}

const people = [
  new Person(0, 'Luke Skywalker', 1),
  // [ // films
  //   5,
  //   3,
  //   6,
  //   4,
  //   7
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/14/',
  //   'http://swapi.co/api/vehicles/30/'
  // ],
  // 'starships': [
  //   'http://swapi.co/api/starships/12/',
  //   'http://swapi.co/api/starships/22/'
  // ]
  new Person(0, 'C-3PO', 1),
  // [ // films
  //   5,
  //   2,
  //   1,
  //   3,
  //   6,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'R2-D2', 8),
  // [ // films
  //   5,
  //   2,
  //   1,
  //   3,
  //   6,
  //   4,
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Darth Vader', 1),
  // [ // films
  //   5,
  //   3,
  //   6,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/13/'
  // ],
  new Person(0, 'Leia Organa', 2),
  // [ // films
  //   5,
  //   3,
  //   6,
  //   4,
  //   7
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/30/'
  // ],
  // 'starships': [],
  new Person(0, 'Owen Lars', 1),
  // [ // films
  //   2,
  //   3,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Beru Whitesun lars', 1),
  // [ // films
  //   2,
  //   3,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'R5-D4', 1),
  // [ // films
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Biggs Darklighter', 1),
  // [ // films
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [
  // 'http://swapi.co/api/starships/12/'
  // ],
  new Person(0, 'Obi-Wan Kenobi', 20),
  // [ // films
  //   5,
  //   2,
  //   1,
  //   3,
  //   6,
  //   4
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/38/'
  // ],
  // 'starships': [
  //   'http://swapi.co/api/starships/48/',
  //   'http://swapi.co/api/starships/59/',
  //   'http://swapi.co/api/starships/64/',
  //   'http://swapi.co/api/starships/65/',
  //   'http://swapi.co/api/starships/74/'
  // ],
  new Person(0, 'Anakin Skywalker', 1),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/44/',
  //   'http://swapi.co/api/vehicles/46/'
  // ],
  // // 'starships': [
  //   'http://swapi.co/api/starships/59/',
  //   'http://swapi.co/api/starships/65/',
  //   'http://swapi.co/api/starships/39/'
  // ],
  new Person(0, 'Wilhuff Tarkin', 21),
  // [ // films
  //   3,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Chewbacca', 14),
  // [ // films
  //   5,
  //   3,
  //   6,
  //   4,
  //   7
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/19/'
  // ],
  // // 'starships': [
  //   'http://swapi.co/api/starships/10/',
  //   'http://swapi.co/api/starships/22/'
  // ],
  new Person(0, 'Han Solo', 22),
  // [ // films
  //   5,
  //   6,
  //   4,
  //   7
  // ],
  // // 'vehicles': [],
  // // 'starships': [
  //   'http://swapi.co/api/starships/10/',
  //   'http://swapi.co/api/starships/22/'
  // ],
  new Person(0, 'Greedo', 23),
  // [ // films
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Jabba Desilijic Tiure', 24),
  // [ // films
  //   1,
  //   6,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Wedge Antilles', 22),
  // [ // films
  //   5,
  //   6,
  //   4
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/14/'
  // ],
  // // 'starships': [
  //   'http://swapi.co/api/starships/12/'
  // ],
  new Person(0, 'Jek Tono Porkins', 26),
  // [ // films
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/12/'
  // ],
  new Person(0, 'Yoda', 28),
  // [ // films
  //   5,
  //   2,
  //   1,
  //   3,
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Palpatine', 8),
  // [ // films
  //   5,
  //   2,
  //   1,
  //   3,
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Boba Fett', 10),
  // [ // films
  //   5,
  //   2,
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/21/'
  // ],
  new Person(0, 'IG-88', 28),
  // [ // films
  //   5
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Bossk', 29),
  // [ // films
  //   5
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Lando Calrissian', 30),
  // [ // films
  //   5,
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/10/'
  // ],
  new Person(0, 'Lobot', 6),
  // [ // films
  //   5
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ackbar', 31),
  // [ // films
  //   6,
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Mon Mothma', 32),
  // [ // films
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Arvel Crynyd', 28),
  // [ // films
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [
  // 'http://swapi.co/api/starships/28/'
  // ],
  new Person(0, 'Wicket Systri Warrick', 7),
  // [ // films
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Nien Nunb', 33),
  // [ // films
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/10/'
  // ],
  new Person(0, 'Qui-Gon Jinn', 28),
  // [ // films
  //   1
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/38/'
  // ],
  // 'starships': [],
  new Person(0, 'Nute Gunray', 18),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Finis Valorum', 9),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Jar Jar Binks', 8),
  // [ // films
  //   2,
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Roos Tarpals', 8),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Rugor Nass', 8),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ric Olié', 8),
  // [ // films
  //   1
  // ],
  //   'http://swapi.co/api/starships/40/'
  // ],
  new Person(0, 'Watto', 34),
  // [ // films
  //   2,
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Sebulba', 35),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Quarsh Panaka', 8),
  // [ // films
  //   1
  // ],
  new Person(0, 'Shmi Skywalker', 1),
  // [ // films
  //   2,
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Darth Maul', 36),
  // [ // films
  //   1
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/42/'
  // ],
  // // 'starships': [
  //   'http://swapi.co/api/starships/41/'
  // ],
  new Person(0, 'Bib Fortuna', 37),
  // [ // films
  //   6
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ayla Secura', 37),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Dud Bolt', 39),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Gasgano', 40),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ben Quadinaros', 41),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Mace Windu', 42),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ki-Adi-Mundi', 43),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Kit Fisto', 44),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Eeth Koth', 45),
  // [ // films
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Adi Gallia', 9),
  // [ // films
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Saesee Tiin', 47),
  // [ // films
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Yarael Poof', 48),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Plo Koon', 49),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/48/'
  // ],
  new Person(0, 'Mas Amedda', 50),
  // [ // films
  //   2,
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Gregar Typho', 8),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/39/'
  // ],
  new Person(0, 'Cordé', 8),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Cliegg Lars', 1),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Poggle the Lesser', 11),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Luminara Unduli', 51),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Barriss Offee', 51),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Dormé', 8),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Dooku', 52),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/55/'
  // ],
  // 'starships': [],
  new Person(0, 'Bail Prestor Organa', 2),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Jango Fett', 53),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Zam Wesell', 54),
  // [ // films
  //   2
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/45/'
  // ],
  // 'starships': [],
  new Person(0, 'Dexter Jettster', 55),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Lama Su', 10),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Taun We', 10),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Jocasta Nu', 9),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Ratts Tyerell', 38),
  // [ // films
  //   1
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'R4-P17', 28),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Wat Tambor', 56),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'San Hill', 57),
  // [ // films
  //   2
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Shaak Ti', 58),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Grievous', 59),
  // [ // films
  //   3
  // ],
  // 'vehicles': [
  //   'http://swapi.co/api/vehicles/60/'
  // ],
  // // 'starships': [
  //   'http://swapi.co/api/starships/74/'
  // ],
  new Person(0, 'Tarfful', 14),
  // [ // films
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Raymus Antilles', 2),
  // [ // films
  //   3,
  //   4
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Sly Moore', 60),
  // [ // films
  //   2,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Tion Medon', 12),
  // [ // films
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Finn', 28),
  // [ // films
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Rey', 28),
  // [ // films
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Poe Dameron', 28),
  // [ // films
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/77/'
  // ],
  new Person(0, 'BB8', 28),
  // [ // films
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Captain Phasma', 28),
  // [ // films
  //   7
  // ],
  // 'vehicles': [],
  // 'starships': [],
  new Person(0, 'Padmé Amidala', 8),
  // [ // films
  //   2,
  //   1,
  //   3
  // ],
  // 'vehicles': [],
  // 'starships': [
  //   'http://swapi.co/api/starships/49/',
  //   'http://swapi.co/api/starships/64/',
  //   'http://swapi.co/api/starships/39/'
  // ],

  new Person(101, 'K-2S0', 39),
  new Person(102, 'Jyn Erso', 101),
  new Person(103, 'Cassian Andor', 102),
  new Person(104, 'Saw Gererra', 103),
  new Person(105, 'Chirrut Îmwe', 104),
  new Person(106, 'Baze Malbus', 104),
  new Person(107, 'Bodhi Rook', 104),
  new Person(108, 'Galen Erso', 105),
  new Person(109, 'Lyra Erso', 106)

];

const data = {
  count: people.length,
  results: people
};

function getPeople() {
  return data;
}
