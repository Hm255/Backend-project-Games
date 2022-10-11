const {fetchCategories} = require('../model/model')
//handling sql queries and directing them to an output in the controller



exports.getCategories = (req, res) => {      //takes category data defined in the model and sends it through
  console.log('found the controller')
    fetchCategories().then((categories) => {
      console.log('sending the model info back to the client')
      res.status(200).send({categories});
    });
  };