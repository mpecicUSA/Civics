
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skip_q').del()
    .then(function () {
      // Inserts seed entries
      return knex('skip_q').insert([
        {user_id: 1, questions_id: 1},
        {user_id: 1, questions_id: 2}
      ]);
    });
};
