const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.get("/searchquery", (req, res) => {
	con.query(
		"SELECT CONCAT(firstName, ' ', lastName) FROM employees;",
		(err, rows) => {
			if (err) throw err;
			console.log("Queries loaded Successfully");
			res.send(rows);
			res.end();
		}
	);
});

module.exports = router;
