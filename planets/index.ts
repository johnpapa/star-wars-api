import { getPlanets } from '../services/planets';
import { getMatch } from '../services/filters';

export async function run(context, request) {

  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let body: any; // string | {};
  let status = 200;
  let data = getPlanets();
  let response: {body: string, status: number};

  if (id) {
    const planet = getMatch(data.results, id);
    body = planet;
  }
  else {
    body = data;
  }

  response = {
    body: body,
    status: status
  };

  context.done(null, response);
};
