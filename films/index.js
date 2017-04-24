module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let filmService = require('../services/films');
  let filters = require('../services/filters');
  let data = filmService.getFilms();
  let response = {};

  // if (request.query && request.query.id) {
  if (id) {
    // const id = parseInt(request.query.id);
    const film = filters.getMatch(data.results, id);
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
