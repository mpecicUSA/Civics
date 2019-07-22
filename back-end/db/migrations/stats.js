exports.up = function(knex, Promise) {
    return knex.schema.createTable("stats",(table)=>{
    table.increments();
    table.integer("user_id")
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.integer("question_id")
      .notNullable()
      .references('id')
      .inTable('question')
      .onDelete('CASCADE')
      .index();
    table.integer("stats_right");
    table.integer("stats_wrong");
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("stats");
  };