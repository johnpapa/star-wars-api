export async function run(context, request) {
  let body = 'hello there';
  let status = 200;

  let response = {
    body: body,
    status: status
  };

  return response;
};
