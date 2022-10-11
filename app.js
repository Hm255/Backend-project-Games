const express = require("express");
const { getCategories } = require("./controller/controller");
const app = express();
app.use(express.json());

app.get("/api/categories", getCategories);  //endpoint invoked with required in getCategories originally from the controller


app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "something went wrong" });
});

module.exports = app

/*
this is the app, this will handle all endpoints and data sent by the controller

it also checks for server/client side errors

if there is a server error (500, production side error) then something in our program isn't working, this doesn't necessarily need testing

if there is a client error (400/404) then the user is inputting either an invalid type of result(400) or something entirely non existent(404)

the app(express)functionality is exported for other files to use requests
*/