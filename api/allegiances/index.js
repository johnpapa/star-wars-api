module.exports = function (context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let peopleService = require('../services/people');
  let data = peopleService.getAllegiances();
  let response = {
    body: data
  };
  context.done(null, response);
};
