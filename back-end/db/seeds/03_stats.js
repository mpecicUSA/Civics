
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('stats').insert([
        {user_id: 1, question_id: 1, stats_right: 5, attempts: 8},
        {user_id: 1, question_id: 2, stats_right: 5, attempts: 6},
        {user_id: 1, question_id: 3, stats_right: 5, attempts: 5},
        {user_id: 1, question_id: 4, stats_right: 5, attempts: 10},

        {user_id: 2, question_id: 1, stats_right: 9, attempts: 10},
        {user_id: 2, question_id: 2, stats_right: 8, attempts: 10},
        {user_id: 2, question_id: 3, stats_right: 7, attempts: 10},
        {user_id: 2, question_id: 4, stats_right: 6, attempts: 10}
      ]);
    });
};
