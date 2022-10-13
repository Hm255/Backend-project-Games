
const app = require("../app");
const db = require("../db/connection");

exports.fetchCategories = () => {
    return db.query(`SELECT * FROM categories`)//sql
    .then(({ rows }) => {                      //sql return handler
        return rows;
    })
}

exports.fetchReviewID = (id) => {
    return db.query (`SELECT * FROM reviews where review_id = $1`, [id])
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






