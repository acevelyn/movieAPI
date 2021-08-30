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
    id: 1,
    title: "Peter Pan"
  },
  {
    id: 2,
    title: "Pitch Perfect"
  },
  {
    id: 3,
    title: "The Edge of Seventeen"
  },
  {
    id: 4,
    title: "The Avengers"
  },
  {
    id: 5,
    title: "Beaches"
  },
  {
    id: 6,
    title: "Little Women"
  },
  {
    id: 7,
    title: "Riding in the car with boys"
  },
  {
    id: 8,
    title: "If Only"
  },
  {
    id: 9,
    title: "Clueless"
  },
  {
    id: 10,
    title: "Life As We Know It"
  }
];

//Displaying a test message in root folder
app.get("/", (req, res) => {
  res.send("Welcome to my Movies App!");
});

// Returns list of all movies
app.get("/movies", (req, res) => {
  res.json(topTenMovies);
});

// Returns data about a single movie to the user
app.get("/movies/:title", (req, res) => {
  res.send("Successful GET request to get data about a single movie");
});

// Returns data about a genre by name/title ****
app.get("/movies/:title/:description/:genre", (req, resp) => {
  res.send("Successful GET Request to get data about a genre by title");
});

// Returns data about a director by name
app.get("/movies/directors/:name", (req, res) => {
  res.send("Successful GET request to get data about a directory by name");
});

// Allow new users to register
app.post("/users", (req, res) => {
  res.send("Successful POST request to allow new users to register");
});

// Allow users to update their user info
app.put("/users/:username", (req, res) => {
  res.send("Successful PUT request to allow users to update their user info");
});

// Allow users to add a movie to their favorites list
app.post("/users/:username/favorites", (req, res) => {
  res.send(
    "Successful POST request to allow users to add a movie to their favorites"
  );
});

// Allow users to remove a movie from their favorites list
app.delete("/movies/:id", (req, res) => {
  res.send("Movie has been removed from list");
});

// Allow users to deregister
app.delete("/users", (req, res) => {
  res.send("User has been removed");
});

// An error handler function to log the errors that may come up
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke");
});

app.listen(8080, () => {
  console.log("My app is listening on port 8080.");
});
