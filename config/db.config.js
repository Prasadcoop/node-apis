const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,           // specify the port here
    user: 'root',         // replace with your MySQL username
    password: '',         // replace with your MySQL password
    database: 'blog'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = db;
