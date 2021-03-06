//Update the name of the controller below and rename the file.
const users = require('../controllers/users.js')
const questions = require("../controllers/questions.js")


module.exports = function(app){
  // GET 
  app.get('/questions', questions.getQuestions);
  app.get('/login', users.login)
  // app.get('/stats/:userId', stats.getStats)
  app.get('/questionsForUser', questions.getUsersNonSkippedQuestions)

  // POST 
  app.post('/register', users.register)
  app.post('/createq', questions.addAQuestion)
  // PATCH

  // DELETE


}
