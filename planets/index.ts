export async function run(context, request) {
  import { planetService } from '../services/planets';
  import { filters } from '../services/filters';

  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  const id = parseInt(context.bindingData.id);

  let body: string;
  let status = 200;
  let data = planetService.getPlanets();
  let response = {};

  if (id) {
    const planet = filters.getMatch(data.results, id);
    body = planet;
  }
  else {
    body = data;
  }

  context.res = {
    body: body,
    status: status
  };

  context.done(null, response);
};
