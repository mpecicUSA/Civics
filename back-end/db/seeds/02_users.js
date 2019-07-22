
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {first_name: "Marko", last_name: 'Pecic', email: "mpecic@me.com", password: "asdf"},
        {first_name: "Kristina", last_name: 'Dakovic', email: "tdakovic@me.com", password: "asdf"}        
      ]);
    });
};
