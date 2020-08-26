const knex = require("./knex"); // conecction.

module.exports = {
    getAll() {
        return knex("patient").orderBy("id");
    },
    getOne(id) {
        return knex("patient").where("id", id).first();
    },
    create(patient) {
        return knex("patient").insert(patient, "*");
    },
    update(id, patient) {
        return knex("patient").where("id", id).update(patient, "*");
    },
    delete(id) {
        return knex("patient").where("id", id).del();
    },
};