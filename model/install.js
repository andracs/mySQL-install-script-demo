var mysql = require('mysql2');
var settings = require('./settings')
var con = mysql.createConnection(settings.settings);
let log = console.log;

let db_navn=settings.extra.database;
let table_navn=settings.extra.table;

createDB = () => {
  con.connect(function (err, result) {
    if (err) throw err;
    log("Connected!");

    // Query 1
    con.query("CREATE DATABASE "+ db_navn, function (err, result) {
      if (err) { log("Db creation failed."); throw err; }
      log("Database created.");
    });
    
    // Query 2
    con.query("USE "+ db_navn, function (err, result) {
      if (err) { log("USE statement failed."); throw err; }
      log("Using database " + db_navn + ".");
    });
    
    // Query 3
    sql = "CREATE TABLE " + table_navn +" (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      log("Table " + table_navn + " created. ");
    });

    // Query 4
    var sql = "INSERT INTO " +table_navn+ " (name, address) VALUES ?";
    var values = [
      ['Bæstet', 'Beastroad 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      process.exit(); // Uden denne vil eksekveringen ikke stoppe. 
    });
  });
}

createDB();


