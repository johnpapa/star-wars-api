module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let planetService = require('../data/planets');
  let data = planetService.getPlanets();
  let planets = data.results;
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const planet = planets.filter(c => c.id === id);
    response = {
      body: planet
    };
  }
  else {
    response = {
      body: planets
    };
  }
  context.done(null, response);
};
