const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.delete("/delete/", (req, res) => {
	const sql = "DELETE FROM employees WHERE id=?";
	con.query(sql, [req.query.id], (error) => {
		if (error) throw error;
		console.log("Data Deleted Successfully");
		res.send("Data Deleted Successfully");
		res.end();
	});
});

module.exports = router;
