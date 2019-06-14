module.exports = function(app, db) {
  const ObjectID = require("mongodb").ObjectID;
  // Allow cors
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  app.get("/movies", (req, res) => {
    const movies = db.collection("movies");

    movies.find({}).toArray((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.stringify(result));
      }
    });
  });

  app.get("/movies/:id", (req, res) => {
    const { id } = req.params;

    const details = { _id: ObjectID(id) };
    const movies = db.collection("movies");

    movies.findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(item);
      }
    });
  });

  app.delete("/movies/:id", (req, res) => {
    const { id } = req.params;

    const details = { _id: ObjectID(id) };
    const movies = db.collection("movies");

    movies.deleteOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send({
          status: "201"
        });
      }
    });
  });

  app.post("/movies", (req, res) => {
    const { body } = req;

    if (Array.isArray(body)) {
      db.collection("movies").insertMany(body, (err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result.ops);
        }
      });
    } else {
      const { title, releaseYear, type, stars } = body;

      const movie = { title, releaseYear, type, stars };

      db.collection("movies").insertOne(movie, (err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result.ops[0]);
        }
      });
    }
  });
};
