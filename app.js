const express = require("express");

const { getCategories, getReviewID, getUsers } = require("./controller/controller");



const app = express();
app.use(express.json());

app.get("/api/categories", getCategories);  //endpoint invoked with required in getCategories originally from the controller


app.get("/api/reviews/:review_id", getReviewID);
app.get("/api/users", getUsers);

app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'ID does not exist' });
});

app.use((err, req, res, next) => {
  if(err.code === '22P02'){
  res.status(400).send({ msg: "ID is not valid (type is wrong)" });
  }
  else if(err.code === '22003'){
    res.status(404).send({msg: "ID does not exist"});
  }
  else{
    next()
  }
})


app.use((err, req, res, next) => {
  res.status(500).send({ msg: "something went wrong" });

});

module.exports = app