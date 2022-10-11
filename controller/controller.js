const {fetchCategories} = require('../model/model')
//handling sql queries and directing them to an output in the controller



exports.getCategories = (req, res) => {      //takes category data defined in the model and sends it through
    fetchCategories().then((categories) => {
      res.status(200).send({categories});
    });
  };