var express = require("express");
var path = require("path");
var mysql = require("mysql");
var params = require("./params/params");

var app = express();



//  Database connection
var connection = mysql.createConnection({
    host     : params.RDS_HOSTNAME,
    user     : params.RDS_USERNAME,
    password : params.RDS_PASSWORD,
    port     : params.RDS_PORT
});
connection.connect(function(err) {
    if (err) {
        console.log('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database');
});
connection.end();
//  End of database connection



app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname+ "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api")); //api as prefix:: localhost:3000/api/api_name

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
}); 