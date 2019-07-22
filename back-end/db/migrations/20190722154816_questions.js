exports.up = function(knex, Promise) {
    return knex.schema.createTable("questions",(table)=>{
        table.increments();
        table.string("question");
        table.string("answer");
        table.string("category");
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("questions");
};