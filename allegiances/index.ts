import { getAllegiances } from '../src/services/people';

export async function run(context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let body: string | {};
  let status = 200;
  let data = getAllegiances();
  let response = {};

  response = {
    body,
    status
  }

  return context.done(null, response);
};
