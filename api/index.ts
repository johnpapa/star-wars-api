import { getFilms } from './services/films';
import { getMatch } from './services/filters';

export async function run(context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let body: string | {};
  let status = 200;
  let data = getFilms();
  let response = {};

  if (id) {
    const film = getMatch(data.results, id);
    body = film;
  }
  else {
    body = data;
  }

  response = {
    body,
    status
  }

  return context.done(null, response);
};
