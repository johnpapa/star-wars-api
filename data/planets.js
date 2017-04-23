const Planet = require('../models/planet');

module.exports = {
  getPlanets: getPlanets
}

const planets = [
  new Planet(1, 'Tatooine'),
  // "residents": [
  // "http://swapi.co/api/people/1/",
  // "http://swapi.co/api/people/2/",
  // "http://swapi.co/api/people/4/",
  // "http://swapi.co/api/people/6/",
  // "http://swapi.co/api/people/7/",
  // "http://swapi.co/api/people/8/",
  // "http://swapi.co/api/people/9/",
  // "http://swapi.co/api/people/11/",
  // "http://swapi.co/api/people/43/",
  // "http://swapi.co/api/people/62/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/5/",
  // "http://swapi.co/api/films/4/",
  // "http://swapi.co/api/films/6/",
  // "http://swapi.co/api/films/3/",
  // "http://swapi.co/api/films/1/"
  // ],

  new Planet(2, 'Alderaan'),
  // "residents": [
  // "http://swapi.co/api/people/5/",
  // "http://swapi.co/api/people/68/",
  // "http://swapi.co/api/people/81/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/6/",
  // "http://swapi.co/api/films/1/"
  // ],
  new Planet(3, 'Yavin IV'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/1/"
  // ],
  new Planet(4, 'Hoth'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/2/"
  // ],
  new Planet(5, 'Dagobah'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/2/",
  // "http://swapi.co/api/films/6/",
  // "http://swapi.co/api/films/3/"
  // ],
  new Planet(6, 'Bespin'),
  // "residents": [
  // "http://swapi.co/api/people/26/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/2/"
  // ],
  new Planet(7, 'Endor'),
  // "residents": [
  // "http://swapi.co/api/people/30/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/3/"
  // ],
  new Planet(8, 'Naboo'),
  // "residents": [
  // "http://swapi.co/api/people/3/",
  // "http://swapi.co/api/people/21/",
  // "http://swapi.co/api/people/36/",
  // "http://swapi.co/api/people/37/",
  // "http://swapi.co/api/people/38/",
  // "http://swapi.co/api/people/39/",
  // "http://swapi.co/api/people/42/",
  // "http://swapi.co/api/people/60/",
  // "http://swapi.co/api/people/61/",
  // "http://swapi.co/api/people/66/",
  // "http://swapi.co/api/people/35/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/5/",
  // "http://swapi.co/api/films/4/",
  // "http://swapi.co/api/films/6/",
  // "http://swapi.co/api/films/3/"
  // ],
  new Planet(9, 'Coruscant'),
  // "residents": [
  // "http://swapi.co/api/people/34/",
  // "http://swapi.co/api/people/55/",
  // "http://swapi.co/api/people/74/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/5/",
  // "http://swapi.co/api/films/4/",
  // "http://swapi.co/api/films/6/",
  // "http://swapi.co/api/films/3/"
  // ],
  new Planet(10, 'Kamino'),
  // "residents": [
  // "http://swapi.co/api/people/22/",
  // "http://swapi.co/api/people/72/",
  // "http://swapi.co/api/people/73/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/5/"
  // ],
  new Planet(11, 'Geonosis'),
  // "residents": [
  // "http://swapi.co/api/people/63/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/5/"
  // ],
  new Planet(12, 'Utapau'),
  // "residents": [
  // "http://swapi.co/api/people/83/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(13, 'Mustafar'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(14, 'Kashyyyk'),
  // "residents": [
  // "http://swapi.co/api/people/13/",
  // "http://swapi.co/api/people/80/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(15, 'Polis Massa'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(16, 'Mygeeto'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(17, 'Felucia'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(18, 'Cato Neimoidia'),
  // "residents": [
  // "http://swapi.co/api/people/33/"
  // ],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(19, 'Saleucami'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/6/"
  // ],
  new Planet(20, 'Stewjon'),
  // "residents": [
  // "http://swapi.co/api/people/10/"
  // ],
  // "films": [],
  new Planet(21, 'Eriadu'),
  // "residents": [
  // "http://swapi.co/api/people/12/"
  // ],
  // "films": [],
  new Planet(21, 'Corellia'),
  // "residents": [
  // "http://swapi.co/api/people/14/",
  // "http://swapi.co/api/people/18/"
  // ],
  // "films": [],
  new Planet(23, 'Rodia'),
  // "residents": [
  // "http://swapi.co/api/people/15/"
  // ],
  // "films": [],
  new Planet(24, 'Nal Hutta'),
  // "residents": [
  // "http://swapi.co/api/people/16/"
  // ],
  // "films": [],
  new Planet(25, 'Dantooine'),
  // "residents": [],
  // "films": [],
  new Planet(26, 'Bestine IV'),
  // "residents": [
  // "http://swapi.co/api/people/19/"
  // ],
  // "films": [],
  new Planet(27, 'Ord Mantell'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/2/"
  // ],
  new Planet(28, 'unknown'),
  // "residents": [
  // "http://swapi.co/api/people/20/",
  // "http://swapi.co/api/people/23/",
  // "http://swapi.co/api/people/29/",
  // "http://swapi.co/api/people/32/",
  // "http://swapi.co/api/people/75/",
  // "http://swapi.co/api/people/84/",
  // "http://swapi.co/api/people/85/",
  // "http://swapi.co/api/people/86/",
  // "http://swapi.co/api/people/87/",
  // "http://swapi.co/api/people/88/"
  // ],
  // "films": [],
  new Planet(29, 'Trandosha'),
  // "residents": [
  // "http://swapi.co/api/people/24/"
  // ],
  // "films": [],
  new Planet(30, 'Socorro'),
  // "residents": [
  // "http://swapi.co/api/people/25/"
  // ],
  // "films": [],
  new Planet(31, 'Mon Cala'),
  // "residents": [
  // "http://swapi.co/api/people/27/"
  // ],
  // "films": [],
  new Planet(32, 'Chandrila'),
  // "residents": [
  // "http://swapi.co/api/people/28/"
  // ],
  // "films": [],
  new Planet(33, 'Sullust'),
  // "residents": [
  // "http://swapi.co/api/people/31/"
  // ],
  // "films": [],
  new Planet(34, 'Toydaria'),
  // "residents": [
  // "http://swapi.co/api/people/40/"
  // ],
  // "films": [],
  new Planet(35, 'Malastare'),
  // "residents": [
  // "http://swapi.co/api/people/41/"
  // ],
  // "films": [],
  new Planet(36, 'Dathomir'),
  // "residents": [
  // "http://swapi.co/api/people/44/"
  // ],
  // "films": [],
  new Planet(37, 'Ryloth'),
  // "residents": [
  // "http://swapi.co/api/people/45/",
  // "http://swapi.co/api/people/46/"
  // ],
  // "films": [],
  new Planet(38, 'Aleen Minor'),
  // "residents": [
  // "http://swapi.co/api/people/47/"
  // ],
  // "films": [],
  new Planet(39, 'Vulpter'),
  // "residents": [
  // "http://swapi.co/api/people/48/"
  // ],
  // "films": [],
  new Planet(40, 'Troiken'),
  // "residents": [
  // "http://swapi.co/api/people/49/"
  // ],
  // "films": [],
  new Planet(41, 'Tund'),
  // "residents": [
  // "http://swapi.co/api/people/50/"
  // ],
  // "films": [],
  new Planet(42, 'Haruun Kal'),
  // "residents": [
  // "http://swapi.co/api/people/51/"
  // ],
  // "films": [],
  new Planet(43, 'Cerea'),
  // "residents": [
  // "http://swapi.co/api/people/52/"
  // ],
  // "films": [],
  new Planet(44, 'Glee Anselm'),
  // "residents": [
  // "http://swapi.co/api/people/53/"
  // ],
  // "films": [],
  new Planet(45, 'Iridonia'),
  // "residents": [
  // "http://swapi.co/api/people/54/"
  // ],
  // "films": [],
  new Planet(46, 'Tholoth'),
  // "residents": [],
  // "films": [],
  new Planet(47, 'Iktotch'),
  // "residents": [
  // "http://swapi.co/api/people/56/"
  // ],
  // "films": [],
  new Planet(48, 'Quermia'),
  // "residents": [
  // "http://swapi.co/api/people/57/"
  // ],
  // "films": [],
  new Planet(49, 'Dorin'),
  // "residents": [
  // "http://swapi.co/api/people/58/"
  // ],
  // "films": [],
  new Planet(50, 'Champala'),
  // "residents": [
  // "http://swapi.co/api/people/59/"
  // ],
  // "films": [],
  new Planet(51, 'Mirial'),
  // "residents": [
  // "http://swapi.co/api/people/64/",
  // "http://swapi.co/api/people/65/"
  // ],
  // "films": [],
  new Planet(52, 'Serenno'),
  // "residents": [
  // "http://swapi.co/api/people/67/"
  // ],
  // "films": [],
  new Planet(53, 'Concord Dawn'),
  // "residents": [
  // "http://swapi.co/api/people/69/"
  // ],
  // "films": [],
  new Planet(54, 'Zolan'),
  // "residents": [
  // "http://swapi.co/api/people/70/"
  // ],
  // "films": [],
  new Planet(55, 'Ojom'),
  // "residents": [
  // "http://swapi.co/api/people/71/"
  // ],
  // "films": [],
  new Planet(56, 'Skako'),
  // "residents": [
  // "http://swapi.co/api/people/76/"
  // ],
  // "films": [],
  new Planet(57, 'Muunilinst'),
  // "residents": [
  // "http://swapi.co/api/people/77/"
  // ],
  // "films": [],
  new Planet(58, 'Shili'),
  // "residents": [
  // "http://swapi.co/api/people/78/"
  // ],
  // "films": [],
  new Planet(59, 'Kalee'),
  // "residents": [
  // "http://swapi.co/api/people/79/"
  // ],
  // "films": [],
  new Planet(60, 'Umbara'),
  // "residents": [
  // "http://swapi.co/api/people/82/"
  // ],
  // "films": [],
  new Planet(61, 'Jakku'),
  // "residents": [],
  // "films": [
  // "http://swapi.co/api/films/7/"
  // ],

  new Planet(101, 'Vallt'),
  new Planet(102, 'Fest'),
  new Planet(103, 'Onderon'),
  new Planet(104, 'Jedha'),
  new Planet(105, 'Grange'),
  new Planet(106, 'Aria Prime'),

];

const data = {
  count: planets.length,
  results: planets
};

function getPlanets() {
  return data;
}
