const db = require("../db/connection");


exports.fetchCategories = () => {
    return db.query(`SELECT * FROM categories`).then(({ rows }) => {
        console.log(rows)
        return rows;
        
    })
}

/*
model functionality and possible error points

sql queries are made in the model

the model requires new connection pools so it can make the connection to the database

a .env file is made (.env.test in this case) containing the name of the database as PGDATABASE=[database name](could use .env.development to change the official development database)

connection.js (line 2) defines the .env file and subsequently the database to connect and send our queries to, this file is exported as a new Pool() to connect itself wherever its required

once connected the sql queries made here can be run on only the connected database

once a sql query is entered and run it can be processed as an array of objects as shown above after .then (rows is an array property containing the output of the sql query on the given table)
*/