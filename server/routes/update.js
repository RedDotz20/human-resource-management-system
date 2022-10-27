const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.put("/update", (req, res) => {
	const data = [
		req.body.firstName,
		req.body.lastName,
		req.body.age,
		req.body.sex,
		req.body.phoneNumber,
		req.body.id,
	];
	const sql =
		"UPDATE employees SET firstName=?,lastName=?,age=?,sex=?,phoneNumber=? WHERE id=?";
	con.query(sql, [...data], (error) => {
		if (error) throw error;
		console.log("Data Updated Successfully");
		res.send("Data Updated Successfully");
	});
});

module.exports = router;
