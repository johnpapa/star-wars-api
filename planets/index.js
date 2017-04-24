module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let planetService = require('../services/planets');
  let filters = require('../services/filters');
  let data = planetService.getPlanets();
  let response = {};

  if (id) {
    const planet = filters.getMatch(data.results, id);
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
