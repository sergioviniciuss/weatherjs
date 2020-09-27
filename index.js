const request = require("request");

const apiKey = "5baf613db7b6a184b1117c2c08d79482";
const city = process.argv[2] || "joinville";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    const weather = JSON.parse(body);
    const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
