app.js


this is the app, this will handle all endpoints and data sent by the controller

it also checks for server/client side errors

if there is a server error (500, production side error) then something in our program isn't working, this doesn't necessarily need testing

if there is a client error (400/404) then the user is inputting either an invalid type of result(400) or something entirely non existent(404)

the app(express)functionality is exported for other files to use requests



model.js 


model functionality and possible error points

sql queries are made in the model

the model requires new connection pools so it can make the connection to the database

a .env file is made (.env.test in this case) containing the name of the database as PGDATABASE=[database name](could use .env.development to change the official development database)

connection.js (line 2) defines the .env file and subsequently the database to connect and send our queries to, this file is exported as a new Pool() to connect itself wherever its required

once connected the sql queries made here can be run on only the connected database

once a sql query is entered and run it can be processed as an array of objects as shown above after .then (rows is an array property containing the output of the sql query on the given table)




controller.js


the controller takes the data outputted from the model

the controller requires the function used to make and order the sql query 

fetchCategories (or any function inside the model required here) is then invoked and chained to a .then with categories

if no errors occur during the given functions invocation, a 200 code (pass) will be given, otherwise it won't be reached

