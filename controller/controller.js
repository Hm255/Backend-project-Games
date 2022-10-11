const {fetchCategories} = require('../model/model')
//handling sql queries and directing them to an output in the controller



exports.getCategories = (req, res) => {      //takes category data defined in the model and sends it through
    fetchCategories().then((categories) => {
      res.status(200).send({categories});
    });
  };





/*
the controller takes the data outputted from the model

the controller requires the function used to make and order the sql query 

fetchCategories (or any function inside the model required here) is then invoked and chained to a .then with categories

if no errors occur during the given functions invocation, a 200 code will be given, otherwise it won't be reached
*/