const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.delete("/delete/:id", (req, res) => {
	const sql = "DELETE FROM employees WHERE id=?";
	con.query(sql, req.params.id, (error) => {
		if (error) throw error;
		console.log("Data Deleted Successfully");
		res.send("Data Deleted Successfully");
		res.end();
	});
});

module.exports = router;
