const qa = require("qs");
const http = require("https");

exports.handler = function(event, context, callback) {
  const parsed = qa.parse(event.body);
  console.log("parsed is ", parsed);
  const text = parsed.text;
  const token = process.env.BOT_TOKEN;

  // request.post("https://slack.com/api/chat.postMessage", {
  //   json: {
  //
  //   }
  // });

  // const opts = {
  //   hostname: "slack.com",
  //   port: 443,
  //   path: "/api/chat.postMessage",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }

  // const req = http.request(options, (res) =>  {
  //   console.log("res is ", res);
  //   callback(null, { statusCode: 200 });
  // });
  //
  // req.on('error', e => {
  //   console.log(e);
  // });
};
