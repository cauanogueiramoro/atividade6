var mysql2 = require('mysql2'); 

var con = mysql2.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});
con.connect(function(err) {
if (err) throw err;
console.log("connected!");
var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});
