
const express = require('express');
const {fetchCategories, fetchReviewID, fetchUsers} = require('../model/model')
//handling sql queries and directing them to an output in the controller

const app = express();

exports.getCategories = (req, res) => {      //takes category data defined in the model and sends it through
    fetchCategories().then((categories) => {
      res.status(200).send({categories});
    });
  };


exports.getReviewID = (req, res, next) => {
  const { review_id } = req.params
  fetchReviewID(review_id)
  .then((review) => {
  res.status(200).send({review})
  })
  .catch((err)=>{
    next(err);
  })
};

exports.getUsers = (req, res) => {      
  fetchUsers().then((users) => {
    res.status(200).send({users});
  });
};

