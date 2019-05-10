exports.handler = function(event, context, callback) {
  const qa = require("qs");
  const parsed = qa.parse(event.body);
  console.log("parsed:", parsed);
  console.log("parsed.text = ", parsed.text);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ text: parsed.text })
  });
};
