module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let filmData = require('../data/film');
  let film = filmData.getFilm();
  let response = {};

  if (request.query && request.query.id) {
    const id = parseInt(request.query.id);
    const person = film.filter(c => c.id === id);
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
