// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: "postres://postgres:gueroyeah@localhost/patient",
    },
    test: {
        client: "pg",
        connection: "postres://postgres:gueroyeah@localhost/test-patient",
    },
};