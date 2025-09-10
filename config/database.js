const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_js_test_project_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool with promise wrapper for async/await
module.exports = pool.promise();