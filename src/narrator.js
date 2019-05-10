exports.handler = function(event, context, callback) {
  const qa = require("qs");
  const parsed = qa.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: "_" + parsed.text + "_"
  });
};
