const express = require("express");
const con = require("../database/connection");
const router = express.Router();

router.get("/searchquery", (req, res) => {
	const sql =
		"SELECT firstName, LastName FROM employees ORDER BY firstName ASC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		console.log("Queries loaded Successfully");
		res.send(rows);
		res.end();
	});
});

module.exports = router;
