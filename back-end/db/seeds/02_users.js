
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "Marko", last_name: 'Pecic', email: "mpecic@me.com", password: "asdf"},
        {first_name: "Kristina", last_name: 'Dakovic', email: "tdakovic@me.com", password: "asdf"}        
      ]);
    });
};
