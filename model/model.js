
const app = require("../app");
const db = require("../db/connection");

exports.fetchCategories = () => {
    return db.query(`SELECT * FROM categories`)//sql
    .then(({ rows }) => {                      //sql return handler
        return rows;
    })
}

exports.fetchReviewID = (review_id) => {
    
    return db.query(`SELECT reviews.*, COUNT(comments.body) ::INT AS comment_count FROM reviews LEFT JOIN comments ON reviews.review_id = comments.review_id WHERE reviews.review_id = $1 GROUP BY reviews.review_id`, [review_id])
    .then(({rows})=>{
        
    return rows[0];  
    })
}

exports.fetchUsers = () => {
    return db.query(`SELECT * FROM users`)//sql
    .then(({ rows }) => {                      //sql return handler
        return rows;
    })
}

const queryValues = [];

exports.editReview = (inc_votes, review_id) => {
    return db.query(`UPDATE reviews SET votes = votes + $1 WHERE review_id = $2 RETURNING *`, [inc_votes, review_id])
    .then(({rows})=>{
        return rows[0];
    })  
}




