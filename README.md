1. you should fork the repository

2. then you should clone this respository

3. use npm install to install necessary packages

4. you should create 2 .env files for this program (these need to be .gitignored)
.env.test: this will run a test database so the database can be experiemented with without the danger of losing or altering information in the official database
.env.dev this will run the official database and all its data

these 2 .env files will contain the following:

PGDATABASE=databasename/databasename_test

.env files: these files will select which database to use depending on the file chosen (test will run the test db). 