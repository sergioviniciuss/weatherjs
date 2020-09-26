const request = require("request");


let apiKey = '5baf613db7b6a184b1117c2c08d79482';
let city = 'joinville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    console.log("body:", body);
  }
});