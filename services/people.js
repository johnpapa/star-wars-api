const Person = require('../models/person');

module.exports = {
  getPeople: getPeople,
  getAllegiances: getAllegiances
}

const allegiances = [
  'rebel',
  'imperial',
  'sith',
  'jedi',
  'bounty hunter'
];

const people = [
  new Person(1, 'Luke Skywalker', 1, 'jedi'),
  new Person(2, 'C-3PO', 1, 'rebel'),
  new Person(3, 'R2-D2', 8, 'rebel'),
  new Person(4, 'Darth Vader', 1, 'sith'),
  new Person(5, 'Leia Organa', 2, 'rebel'),
  new Person(6, 'Owen Lars', 1, undefined),
  new Person(7, 'Beru Whitesun lars', 1, undefined),
  new Person(8, 'R5-D4', 1, 'rebel'),
  new Person(9, 'Biggs Darklighter', 1, 'rebel'),
  new Person(10, 'Obi-Wan Kenobi', 20, 'jedi'),
  new Person(11, 'Anakin Skywalker', 1, 'jedi'),
  new Person(12, 'Wilhuff Tarkin', 21, 'imperial'),
  new Person(13, 'Chewbacca', 14, 'rebel'),
  new Person(14, 'Han Solo', 22, 'rebel'),
  new Person(15, 'Greedo', 23, 'bounty hunter'),
  new Person(16, 'Jabba Desilijic Tiure', 24, undefined),
  new Person(17, 'Wedge Antilles', 22, 'rebel'),
  new Person(18, 'Jek Tono Porkins', 26, undefined),
  new Person(19, 'Yoda', 28, 'jedi'),
  new Person(20, 'Palpatine', 8, 'sith'),
  new Person(21, 'Boba Fett', 10, 'bounty hunter'),
  new Person(22, 'IG-88', 28, 'bounty hunter'),
  new Person(23, 'Bossk', 29, 'bounty hunter'),
  new Person(24, 'Lando Calrissian', 30, 'rebel'),
  new Person(25, 'Lobot', 6, undefined),
  new Person(26, 'Ackbar', 31, 'rebel'),
  new Person(27, 'Mon Mothma', 32, 'rebel'),
  new Person(28, 'Arvel Crynyd', 28, undefined),
  new Person(29, 'Wicket Systri Warrick', 7, 'rebel'),
  new Person(30, 'Nien Nunb', 33, undefined),
  new Person(31, 'Qui-Gon Jinn', 28, 'jedi'),
  new Person(32, 'Nute Gunray', 18, 'rebel'),
  new Person(33, 'Finis Valorum', 9, undefined),
  new Person(34, 'Jar Jar Binks', 8, 'rebel'),
  new Person(35, 'Roos Tarpals', 8, undefined),
  new Person(36, 'Rugor Nass', 8, undefined),
  new Person(37, 'Ric Olié', 8, undefined),
  new Person(38, 'Watto', 34, undefined),
  new Person(39, 'Sebulba', 35, undefined),
  new Person(40, 'Quarsh Panaka', 8, undefined),
  new Person(41, 'Shmi Skywalker', 1, undefined),
  new Person(42, 'Darth Maul', 36, 'sith'),
  new Person(43, 'Bib Fortuna', 37, undefined),
  new Person(44, 'Ayla Secura', 37, 'jedi'),
  new Person(45, 'Dud Bolt', 39, undefined),
  new Person(46, 'Gasgano', 40, undefined),
  new Person(47, 'Ben Quadinaros', 41, undefined),
  new Person(48, 'Mace Windu', 42, 'jedi'),
  new Person(49, 'Ki-Adi-Mundi', 43, 'jedi'),
  new Person(50, 'Kit Fisto', 44, 'jedi'),
  new Person(51, 'Eeth Koth', 45, 'jedi'),
  new Person(52, 'Adi Gallia', 9, undefined),
  new Person(53, 'Saesee Tiin', 47, undefined),
  new Person(54, 'Yarael Poof', 48, undefined),
  new Person(55, 'Plo Koon', 49, 'jedi'),
  new Person(56, 'Mas Amedda', 50, undefined),
  new Person(57, 'Gregar Typho', 8, undefined),
  new Person(58, 'Cordé', 8, 'rebel'),
  new Person(59, 'Cliegg Lars', 1, undefined),
  new Person(60, 'Poggle the Lesser', 11, undefined),
  new Person(61, 'Luminara Unduli', 51, 'jedi'),
  new Person(62, 'Barriss Offee', 51, undefined),
  new Person(63, 'Dormé', 8, undefined),
  new Person(64, 'Dooku', 52, 'sith'),
  new Person(65, 'Bail Prestor Organa', 2, 'rebel'),
  new Person(66, 'Jango Fett', 53, 'bounty hunter'),
  new Person(67, 'Zam Wesell', 54, 'bounty hunter'),
  new Person(68, 'Dexter Jettster', 55, undefined),
  new Person(69, 'Lama Su', 10, undefined),
  new Person(70, 'Taun We', 10, undefined),
  new Person(71, 'Jocasta Nu', 9, undefined),
  new Person(72, 'Ratts Tyerell', 38, undefined),
  new Person(73, 'R4-P17', 28, undefined),
  new Person(74, 'Wat Tambor', 56, undefined),
  new Person(75, 'San Hill', 57, undefined),
  new Person(76, 'Shaak Ti', 58, 'jedi'),
  new Person(77, 'Grievous', 59, 'imperial'),
  new Person(78, 'Tarfful', 14, undefined),
  new Person(79, 'Raymus Antilles', 2, 'rebel'),
  new Person(80, 'Sly Moore', 60, undefined),
  new Person(81, 'Tion Medon', 12, undefined),
  new Person(82, 'Finn', 28, 'rebel'),
  new Person(83, 'Rey', 28, 'jedi'),
  new Person(84, 'Poe Dameron', 28, 'rebel'),
  new Person(85, 'BB8', 28, 'rebel'),
  new Person(86, 'Captain Phasma', 28, 'imperial'),
  new Person(87, 'Padmé Amidala', 8, 'rebel'),

  new Person(101, 'K-2S0', 39, 'rebel'),
  new Person(102, 'Jyn Erso', 101, 'rebel'),
  new Person(103, 'Cassian Andor', 102, 'rebel'),
  new Person(104, 'Saw Gererra', 103, 'rebel'),
  new Person(105, 'Chirrut Îmwe', 104, 'rebel'),
  new Person(106, 'Baze Malbus', 104, 'rebel'),
  new Person(107, 'Bodhi Rook', 104, 'rebel'),
  new Person(108, 'Galen Erso', 105, 'rebel'),
  new Person(109, 'Lyra Erso', 106, 'rebel'),
  new Person(110, 'Orson Krennic', 107, 'imperial'),
  new Person(111, 'Kylo Ren', 32, 'imperial'),
  new Person(112, 'Armitage Hux', 108, 'imperial'),
  new Person(113, 'Snoke', 28, 'imperial')
];

function getAllegiances() {
  return {
    count: allegiances.length,
    results: allegiances
  };
}

function getPeople() {
  return {
    count: people.length,
    results: people
  };
}
