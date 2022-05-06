var mysql = require('mysql');
exports.pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'alo',
    debug    :  false
});