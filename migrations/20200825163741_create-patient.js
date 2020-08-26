exports.up = function(knex) {
    return knex.schema.createTable("patient", (table) => {
        table.increments();
        table.text("name");
    });
};

exports.down = function(knex) {
    return knex.schema, dropTable("sticker");
};