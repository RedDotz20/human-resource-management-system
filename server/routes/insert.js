const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.post("/insert", (req, res) => {
	const data = [
		req.body.firstName,
		req.body.lastName,
		req.body.age,
		req.body.sex,
		req.body.phoneNumber,
	];

	const sql =
		"INSERT INTO employees" +
		"(firstName,lastName,age,sex,phoneNumber) " +
		"VALUES(?,?,?,?,?)";
	con.query(sql, [...data], (error) => {
		if (error) throw error;
		console.log("Inserted Successfully");
		res.send("Inserted Successfully");
		res.end();
	});
});

module.exports = router;
