1. you should fork the repository

2. then you should clone this respository

3. use npm install to install necessary packages

4. you should create 2 .env files for this program (these need to be .gitignored)
.env.test: this will run a test database so the database can be experiemented with without the danger of losing or altering information in the official database
.env.dev this will run the official database and all its data

these 2 .env files will contain the following:

PGDATABASE=databasename/databasename_test

<<<<<<< HEAD
To keep track of the tasks involved in this project we're going to use a kanban board. Ensure that you work on one _ticket_ at time. You can click on the ticket to find out more information about what is required for the feature. A ticket is not considered complete unless both the happy path and errors response are handled. You can make use of the checklist on each ticket to keep track of the errors you want to handle. You can also make use of [error-handling.md](error-handling.md) to consider the error codes we may wish to respond with.

**Please ensure you work through the tickets in numerical order.**

## Git Branching and Pull Requests

You will be working on each ticket on a new **branch**.

To create and switch to a new git branch use the command:

```
git checkout -b <new branch name>
```

This will create a branch and move over to that branch. (Omit the `-b` flag if you wish to switch to an already existing branch).

We recommend that you name the branch after the number assigned to each ticket via the header. eg. `ncnews-1`

When pushing the branch to git hub ensure that you make reference to the branch you are pushing to on the remote.

```
git push origin <branch name>
```

From github you can make a pull request and share the link and ticket number via a pull request specific nchelp using the command `nchelp pr`. A tutor will swing by to review your code. Ensure that you keep your trello up to date whilst you await the PR approval. Regular `nchelp` will be available for when you need support.

Once a pull request been accepted be sure to switch back to the main branch and pull down the updated changes.

```
git checkout main

git pull origin main
```

You can tidy up your local branches once they have been pull into main by deleting them:

```
git branch -D <local branch>
```

## Husky

To ensure we are not commiting broken code this project makes use of git hooks. Git hooks are scripts triggered during certain events in the git lifecycle. Husky is a popular package which allows us to set up and maintain these scripts. This project makes use a _pre-commit hook_. When we attempt to commit our work, the script defined in the `pre-commit` file will run. If any of our tests fail than the commit will be aborted.

The [Husky documentation](https://typicode.github.io/husky/#/) explains how to configure Husky for your own project as well as creating your own custom hooks.\_

// describe ("GET/api/reviews/:review_id", () => {
//   test("returns review_id", () => {
//     return request(app)
//     .get(`api/review/:review_id/$1`)
//     .expect(200)
//     .then(({body: {reviews}}) => {
//     .expect(reviews).toHaveProperty()
//     })
//   })
// })
=======
.env files: these files will select which database to use depending on the file chosen (test will run the test db). 
>>>>>>> 1f24d0befff556c7194ad3c4d7a1f7d3e67075ba
