const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const BodyParser = require("body-parser");
const db = require("./config/db");
const app = express();

const port = 8080;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const client = new MongoClient(db.url, { useNewUrlParser: true });
client.connect((err, database) => {
  if (err) return console.log(err);
  database = client.db("Movies");

  require("./app/routes")(app, database);

  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});
