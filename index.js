/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

// Implementing Express
const express = require("express"),
  morgan = require("morgan");

const app = express();

// Accessing files in the public folder
app.use(morgan("common"));
app.use(express.static("public"));

// Array of Objects with Top Movies
let topTenMovies = [
  {
    number: 1,
    title: "Peter Pan"
  },
  {
    number: 2,
    title: "Pitch Perfect"
  },
  {
    number: 3,
    title: "The Edge of Seventeen"
  },
  {
    number: 4,
    title: "The Avengers"
  },
  {
    number: 5,
    title: "Beaches"
  },
  {
    number: 6,
    title: "Little Women"
  },
  {
    number: 7,
    title: "Riding in the car with boys"
  },
  {
    number: 8,
    title: "If Only"
  },
  {
    number: 9,
    title: "Clueless"
  },
  {
    number: 10,
    title: "Life As We Know It"
  }
];
// Converting topTenMovies to JSON when requested
app.get("/movies", (req, res) => {
  res.json(topTenMovies);
});
// Displaying a test message in root folder
app.get("/", (req, res) => {
  res.send("Welcome to my Movies App!");
});
// An error handler function to log the errors that may come up
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke");
});

app.listen(8080, () => {
  console.log("My app is listening on port 8080.");
});
