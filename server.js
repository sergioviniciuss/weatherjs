const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

let apiKey = "5baf613db7b6a184b1117c2c08d79482";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

app.post("/", (req, res) => {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  request(url, (err, response, body) => {
    if (err) {
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      const weather = JSON.parse(body);

      if (weather.main === undefined) {
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        const weatherResponse = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', { weather: weatherResponse, error: null })
      }
    }
  });

});
