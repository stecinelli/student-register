const database = require("./database");
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

const validateDeveloper = (req, res, next) => {
  const { body } = req;
  if (!body.name || typeof body.name !== "string") {
    return res
      .status(400)
      .json({ message: "Please supply a req body with the key of 'name'" });
  }
  res.locals.dev = body;
  next();
};

app.get("/bootcamps", (_, res) => {
  return res.json(database);
});

app.post("/bootcamps/:bootcamp/", validateDeveloper, (req, res) => {
  const { bootcamp } = req.params;
  const course = database.find((camp) => camp.bootcamp === bootcamp);

  if (!course) {
    return res.sendStatus(400);
  }

  const newDeveloper = {
    id: uuidv4(),
    ...res.locals.dev,
    onPlacement: false,
  };

  course.developers.push(newDeveloper);
  return res.header(`${course}`).status(201).json(newDeveloper);
});

app.delete("/bootcamps/:bootcamp/developers/:id", (req, res) => {
  const { id, bootcamp } = req.params;

  const data = database.find((test) => test.bootcamp === bootcamp);

  if (!data) {
    return res.sendStatus(404);
  }

  const devIdx = data.developers.findIndex((dev) => dev.id == id);
  if (devIdx === -1) {
    return res.sendStatus(404);
  }

  data.developers.splice(devIdx, 1);
  return res.sendStatus(204);
});

app.use("*", (req, res) => {
  res.status(400).json({
    message: "Trying to find easter eggs? There are only 3 end points!",
  });
});

app.listen(PORT, () =>
  console.log(`Running on localhost:${PORT}`)
);
