module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let peopleService = require('../data/people');
  let data = peopleService.getPeople();
  let people = data.results;
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const match = people.filter(p => p.id === id);
    const person = match.length ? match[0] : {};
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
