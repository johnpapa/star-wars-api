export async function run(context, request) {
  context.log('JavaScript HTTP trigger function processed a request.');
  context.log('Bindings', context.bindings);
  context.log('Request', request);

  let body = 'hello there';
  let status = 200;

  let response = {
    body: body,
    status: status
  };

  return context.done(null, response);
};
