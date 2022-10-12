const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const { request } = require("http");

const con = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "admin",
	database: "hrms_system",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/showemployees", (req, res) => {
	const sql = "SELECT * FROM employees";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
});

app.post("/insert", (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const age = req.body.age;
	const sex = req.body.sex;
	const phoneNumber = req.body.phoneNumber;

	const sql =
		"INSERT INTO employees(firstName,lastName,age,sex,phoneNumber) VALUES(?,?,?,?,?)";
	con.query(
		sql,
		[firstName, lastName, age, sex, phoneNumber],
		(err, result) => {
			if (err) throw err;
			res.send("Inserted Successfully");
		}
	);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`runniing on http://localhost:${PORT}`);
});
