module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let filmService = require('../services/films');
  let filters = require('../services/filters');
  let data = filmService.getFilms();
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const film = filters.getMatch(context, data.results, id);
    response = {
      body: film
    };
  }
  else {
    response = {
      body: data
    };
  }
  context.done(null, response);
};
