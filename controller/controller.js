
const express = require('express');
const {fetchCategories, fetchReviewID, fetchUsers, editReview, fetchReviews, fetchCommentbyReviewID} = require('../model/model')
//handling sql queries and directing them to an output in the controller

const app = express();

exports.getCategories = (req, res) => {      //takes category data defined in the model and sends it through
    fetchCategories().then((categories) => {
      res.status(200).send({categories});
    });
  };


exports.getReviewID = (req, res, next) => {
  const { review_id } = req.params
  return fetchReviewID(review_id)
  .then((review) => {
  return res.status(200).send({review})
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

exports.newRev = (req, res, next) => {
  const {inc_votes} = req.body     
  const {review_id} = req.params
  editReview(inc_votes, review_id)
  .then((review) => {
  res.status(200).send({review});
  })
  .catch((err)=>{
    
    next(err);
  })
};

exports.getReviews = (req, res, next) => {
  return fetchReviews()
  .then((reviews) => {
    return res.status(200).send({reviews});
  })
  .catch(next);
}
exports.getCommentByReviewId = (req, res, next) => {
  const {review_id} = req.params
  console.log(req.params)
  return fetchCommentbyReviewID(review_id)
  .then((comment) => {
    return res.status(200).send({comment});
  })
  .catch(next);
} 