const asyncHandler = require('express-async-handler');
const connection = require('./dbConnection');

const deleteEmployee = asyncHandler(async (req, res) => {
	const sql = 'DELETE FROM employees WHERE id=?';
	connection.query(sql, [req.query.id], (error) => {
		if (err) {
			console.error('Error loading data:', err);
			return res.status(500).send('Internal Server Error');
		}
		res.status(201).send('Data Deleted Successfully');
	});
});

const insertEmployee = asyncHandler(async (req, res) => {
	const { firstName, lastName, age, sex, phoneNumber } = req.body;
	const data = [firstName, lastName, age, sex, phoneNumber];
	const sql =
		'INSERT INTO employees (firstName,lastName,age,sex,phoneNumber) ' +
		'VALUES(?,?,?,?,?)';
	connection.query(sql, [...data], (error) => {
		if (err) {
			console.error('Error loading data:', err);
			return res.status(500).send('Internal Server Error');
		}
		res.status(201).send('Inserted Successfully');
	});
});

const searchEmployee = asyncHandler(async (req, res) => {
	const sql = `SELECT * FROM employees WHERE id=?`;
	connection.query(sql, req.query.value, (err, rows) => {
		if (err) {
			console.error('Error loading data:', err);
			return res.status(500).send('Internal Server Error');
		}
		res.status(200).send(rows);
	});
});

const showEmployees = asyncHandler(async (req, res) => {
	connection.query('SELECT * FROM employees', (err, rows) => {
		if (err) {
			console.error('Error loading data:', err);
			return res.status(500).send('Internal Server Error');
		}
		res.status(200).send(rows);
	});
});

const updateEmployees = asyncHandler(async (req, res) => {
	const { firstName, lastName, age, sex, phoneNumber, id } = req.body;
	const data = [firstName, lastName, age, sex, phoneNumber, id];
	const sql =
		'UPDATE employees ' +
		'SET firstName=?,lastName=?,age=?,sex=?,phoneNumber=? ' +
		'WHERE id=?';
	connection.query(sql, [...data], (error) => {
		if (err) {
			console.error('Error loading data:', err);
			return res.status(500).send('Internal Server Error');
		}
		res.status(201).send('Data Updated Successfully');
	});
});

const sortFnameASC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY firstName ASC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

const sortFnameDESC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY firstName DESC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

const sortLnameASC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY lastName ASC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

const sortLnameDESC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY lastName DESC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

const sortAgeASC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY age ASC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

const sortAgeDESC = asyncHandler(async (req, res) => {
	const sql = 'SELECT * FROM employees ORDER BY age DESC';
	connection.query(sql, (err, rows) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

module.exports = {
	deleteEmployee,
	insertEmployee,
	searchEmployee,
	showEmployees,
	updateEmployees,
	sortFnameASC,
	sortFnameDESC,
	sortLnameASC,
	sortLnameDESC,
	sortAgeASC,
	sortAgeDESC,
};
