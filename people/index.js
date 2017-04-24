module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let peopleService = require('../services/people');
  let filters = require('../services/filters');
  let data = peopleService.getPeople();
  let response = {};

  if (id) {
    const person = filters.getMatch(data.results, id);
    response = {
      body: person
    };
  }
  else {
    response = {
      body: data
    };
  }
  context.done(null, response);
};
