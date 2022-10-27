const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.get("/showemployees", (req, res) => {
	con.query("SELECT * FROM employees", (err, rows) => {
		if (err) throw err;
		console.log("Data loaded Successfully");
		res.send(rows);
		res.end();
	});
});

module.exports = router;
