const qa = require("qs");
const http = require("https");

exports.handler = function(event, context, callback) {
  const parsed = qa.parse(event.body);
  console.log("parsed is ", parsed);
  const text = parsed.text;
  const token = process.env.BOT_TOKEN;
  console.log(`token = '${token}'`);

  const data = JSON.stringify({
    channel: parsed.channel_id,
    text: `_${text}_`
  });

  const opts = {
    hostname: "slack.com",
    port: 443,
    path: "/api/chat.postMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
      Authorization: `Bearer ${token}`
    }
  };

  const req = http.request(opts, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
      process.stdout.write(d);
    });

    callback(null, { body: "", statusCode: 200 });
  });

  req.on("error", e => {
    console.log("error is ", e);
  });

  req.write(data);
  req.end();
};
