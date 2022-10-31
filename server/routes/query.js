const express = require("express");
const con = require("../database/connection");
const router = express.Router();

router.get("/searchquery", (req, res) => {
	// "SELECT CONCAT(firstName, ' ', lastName) FROM employees;"
	const sql = "SELECT firstName, LastName FROM employees";
	// const sql = "SELECT * FROM employees";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		console.log("Queries loaded Successfully");
		res.send(rows);
		res.end();
	});
});

module.exports = router;
