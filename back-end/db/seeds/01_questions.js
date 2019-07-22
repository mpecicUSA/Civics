
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: "How many years does a senator serve", answer: '6', category: "Civics"},
        {question: "How many years does a representative serve", answer: '2', category: "Civics"},
        {question: "How many years does a president serve", answer: '4', category: "Civics"},
        {question: "What are the three branches of government", answer: 'Executive, Legaslative, Judicial', category: "Civics"},
        {question: "Who is in charge of the Executive branch", answer: 'The president', category: "Civics"}
      ]);
    });
};
