const mysql = require('mysql');

const sv = { tk:'sv1', mk:'1' }
// khoi tao ket noi
// const connection = require('./config');
const config = require('./Config');
const connection = mysql.createConnection(config);
 

var sql = "SELECT msv, mk FROM sv ";

//Tra ket qua truy van
connection.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    Object.keys(results).forEach(function (key) {
        var row = results[key];
        console.log(row)
        if(row.msv === sv.tk && row.mk === sv.mk) console.log('true');
        else console.log('false');
    });
});
//Dong ket noi
connection.end();