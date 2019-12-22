const mysql = require('mysql')
const config = require('./Config')
const connection = mysql.createConnection(config)

var del = "delete from sv"
var fix = "SET SQL_SAFE_UPDATES=0"
connection.query(fix)
connection.query(del)
connection.end()