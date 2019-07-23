const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
getQuestions: function(req, res) {
    knex("questions")
        .then((result) => {
            res.json(result)
        })
  },
}
