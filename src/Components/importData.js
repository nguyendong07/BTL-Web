
const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql');
 
// File path.
readXlsxFile('../\Data\\customers.xlsx').then((rows) => {
  // `rows` is an array of rows
  console.log(rows);
  rows.shift();
  // each row being an array of cells.

    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
  });
 
  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      // let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
      let query = 'select * from customer';
      connection.query(query, [rows], (error, response) => {
        console.log(response);
      });
    }
  });





})
 
// Readable Stream.






// // File path.
// readXlsxFile('customers.xlsx').then((rows) =&gt; {
//   // `rows` is an array of rows
//   // each row being an array of cells.
  
//   console.log(rows);
  
//   /**
//     [ [ 'Id', 'Name', 'Address', 'Age' ],
//       [ 1, 'Jack Smith', 'Massachusetts', 23 ],
//       [ 2, 'Adam Johnson', 'New York', 27 ],
//       [ 3, 'Katherin Carter', 'Washington DC', 26 ],
//       [ 4, 'Jack London', 'Nevada', 33 ],
//       [ 5, 'Jason Bourne', 'California', 36 ] ]  
//   */
  
//   // Remove Header ROW
//   rows.shift();
 
//   // Create a connection to the database
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345',
//     database: 'testdb'
//   });
 
//   // Open the MySQL connection
//   connection.connect((error) =&gt; {
//     if (error) {
//       console.error(error);
//     } else {
//       let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
//       connection.query(query, [rows], (error, response) =&gt; {
//         console.log(error || response);
        
//         /**
//           OkPacket {
//             fieldCount: 0,
//             affectedRows: 5,
//             insertId: 0,
//             serverStatus: 2,
//             warningCount: 0,
//             message: '&amp;Records: 5  Duplicates: 0  Warnings: 0',
//             protocol41: true,
//             changedRows: 0 }        
//         */
//       });
//     }
//   });
// })