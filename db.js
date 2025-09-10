const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_js_test_project_db",
});

module.exports = pool.promise(); // Use promise wrapper for async/await
