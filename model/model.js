const db = require("../db/connection");

//sql queries made in the model


exports.fetchCategories = () => {
    console.log('found the model');
    return db.query(`SELECT * FROM categories`).then(({ rows }) => {
        console.log('sending data from model to controller');
        return rows;
        
    })
}
