
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('stats').insert([
        {user_id: 1, question_id: 1, stats_right: 75, stats_wrong: 25},
        {user_id: 1, question_id: 2, stats_right: 75, stats_wrong: 25},
        {user_id: 1, question_id: 3, stats_right: 75, stats_wrong: 25},
        {user_id: 1, question_id: 4, stats_right: 75, stats_wrong: 25},
        {user_id: 1, question_id: 5, stats_right: 75, stats_wrong: 25},
        {user_id: 1, question_id: 6, stats_right: 75, stats_wrong: 25},
        {user_id: 2, question_id: 1, stats_right: 85, stats_wrong: 15},
        {user_id: 2, question_id: 2, stats_right: 85, stats_wrong: 15},
        {user_id: 2, question_id: 3, stats_right: 85, stats_wrong: 15},
        {user_id: 2, question_id: 4, stats_right: 85, stats_wrong: 15},
        {user_id: 2, question_id: 5, stats_right: 85, stats_wrong: 15},
        {user_id: 2, question_id: 6, stats_right: 85, stats_wrong: 15},
      ]);
    });
};
