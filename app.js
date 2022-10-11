const express = require("express");
const { getCategories } = require("./controller/controller");
const app = express();
app.use(express.json());

app.get("/api/categories", getCategories);

app.use((req, res, next) => {
  console.log(req.body);
  next();
})

app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ msg: "something went wrong" });
});

module.exports = app