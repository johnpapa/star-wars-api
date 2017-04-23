module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let peopleData = require('../data/people');
  let people = peopleData.getPeople();
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const person = people.filter(c => c.id === id);
    response = {
      body: person
    };
  }
  else {
    response = {
      body: people
    };
  }
  context.done(null, response);
};
