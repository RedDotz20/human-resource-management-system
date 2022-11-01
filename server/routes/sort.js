const express = require("express");
const con = require("../database/connection");

const router = express.Router();

router.get("/fnameASC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY firstName ASC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

router.get("/fnameDESC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY firstName DESC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

router.get("/lnameASC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY lastName ASC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

router.get("/lnameDESC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY lastName DESC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

router.get("/ageASC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY age ASC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

router.get("/ageDESC", (req, res) => {
	const sql = "SELECT * FROM employees ORDER BY age DESC";
	con.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

module.exports = router;
