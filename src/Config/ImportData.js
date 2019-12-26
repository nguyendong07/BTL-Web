const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql');
 
// File path.
readXlsxFile('../\Data\\customers.xlsx').then((rows) => {
  console.log(rows);
  rows.shift();
  // each row being an array of cells.

  const config = require('./Config');
  const connection = mysql.createConnection(config);
  var insert = "insert into sv (msv, danhsachsv_mds, mk, ten, ngaysinh, mamonthi, tinhtrang, macathi) VALUES ('msv2',1,'mk1','ten1','1999/5/11',1,0,1)"
  var fix = "SET FOREIGN_KEY_CHECKS=0"
  connection.query(fix)
  connection.query(insert, (error, results, fields) => {
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

})