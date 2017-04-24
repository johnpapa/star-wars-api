module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let planetService = require('../services/planets');
  let filters = require('../services/filters');
  let data = planetService.getPlanets();
  let planets = data.results;
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const planet = filters.getMatch(planets, id);
    response = {
      body: planet
    };
  }
  else {
    response = {
      body: data
    };
  }
  context.done(null, response);
};
