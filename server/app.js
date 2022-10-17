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
	con.query("SELECT * FROM employees", (err, rows) => {
		if (err) throw err;
		console.log("Data loaded Successfully");
		res.send(rows);
	});
});

app.post("/insert", (req, res) => {
	const data = [
		req.body.firstName,
		req.body.lastName,
		req.body.age,
		req.body.sex,
		req.body.phoneNumber,
	];

	const sql =
		"INSERT INTO employees(firstName,lastName,age,sex,phoneNumber) VALUES(?,?,?,?,?)";
	con.query(sql, [...data], (error) => {
		if (error) throw error;
		console.log("Inserted Successfully");
		res.send("Inserted Successfully");
	});
});

app.delete("/delete/:id", (req, res) => {
	const sql = "DELETE FROM employees WHERE id=?";
	con.query(sql, req.params.id, (error) => {
		if (error) throw error;
		console.log("Data Deleted Successfully");
		res.send("Data Deleted Successfully");
	});
});

//TODO: update credentials ------------------
app.put("/update", (req, res) => {
	const id = req.body.firstName;
	const sql = "UPDATE employees SET firstName=? WHERE firstName=?";
});
//TODO: update credentials ------------------

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`runniing on http://localhost:${PORT}`);
});
