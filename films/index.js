module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let filmService = require('../data/films');
  let data = filmService.getFilms();
  let films = data.results.filter(c => c.id === id);
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const film = films.filter(c => c.id === id);
    response = {
      body: film
    };
  }
  else {
    response = {
      body: films
    };
  }
  context.done(null, response);
};
