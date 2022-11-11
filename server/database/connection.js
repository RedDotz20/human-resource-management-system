const mysql = require("mysql2");
require("dotenv").config();
// require("dotenv").config({ path: "../../client/.env" });

const con = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

module.exports = con;
