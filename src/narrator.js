exports.handler = function(event, context, callback) {
  console.log(event.queryStringParameters);

  const resp = { text: event.queryStringParameters.text };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(resp)
  });
};
