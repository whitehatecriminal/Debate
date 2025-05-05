const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    USER: 'SHUBHAM',
    password: '22@ugust2004',
    database: 'debate'
});

db.connect((err)=> {
    if(err){
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;