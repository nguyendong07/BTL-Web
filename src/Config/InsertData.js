const mysql = require('mysql')
const config = require('./Config')
const connection = mysql.createConnection(config)
const sv = { msv: 'msv1', danhsachsv_mds: 1, mk: 'msv1', ten: 'ten1', ngaysinh: "1999/1/20", mamonthi: 1, tinhtrang: 0, macathi: 1 }
var msv = 'msv2'
var danhsachsv_mds = 10
var mk = 'abc'
var ten = 'leducuet'
var Dob = "11/3/1999"
var mamonthi = 1
var tinhtrang = 0
var macathi = 1
var fixInsert = "SET FOREIGN_KEY_CHECKS=0"
var insert = "insert into sv (msv, danhsachsv_mds, mk, ten, ngaysinh, mamonthi, tinhtrang, macathi) VALUES ('" + msv + "','" + danhsachsv_mds + "','" + mk + "','" + ten + "',STR_TO_DATE('" + Dob + "', '%d/%m/%Y'),'" + mamonthi + "','" + tinhtrang + "','" + macathi + "')"
var fixDel = "SET SQL_SAFE_UPDATES=0"
var del = "delete from sv"
// connection.query(fixDel)
// connection.query(del)
connection.query(fixInsert)
connection.query(insert)
connection.end()