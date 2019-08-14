const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
getQuestions: function(req, res) {
    knex("questions")
        .then((result) => {
            res.json(result)
        })
  },
getUsersNonSkippedQuestions: function(req,res){
  //go to table skip_q
  knex("skip_q")
  .where('user_id', req.body.user_id)
  //pull all results where user_id matches the passed in user_id
  // result is json file with user_id's skipped questions 
  // join?? with all questions -- find results that dont match ? 
    .then((result)=> {
      res.json(result)
    })
},
addAQuestion: function(req,res){
  console.log(req.body)
  knex('questions')
    .insert({
      question: req.body.question,
      answer: req.body.answer,
      category: "Civics", 
      skip: false
    }).then(()=> {
      res.json({message: "question was added"})
    }).catch((err)=> {
      res.status(400).send({message: err})
    })
}
}

