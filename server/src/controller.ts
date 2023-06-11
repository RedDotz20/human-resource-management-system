import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import connection from './dbConnection';

export const deleteEmployee = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = 'DELETE FROM employees WHERE id=?';
		connection.query(sql, [req.query.id], (err: any) => {
			if (err) {
				console.error('Error loading data:', err);
				return res.status(500).send('Internal Server Error');
			}
			res.status(201).send('Data Deleted Successfully');
		});
	}
);

export const insertEmployee = asyncHandler(
	async (req: Request, res: Response) => {
		const { firstName, lastName, age, sex, phoneNumber } = req.body;
		const data = [firstName, lastName, age, sex, phoneNumber];
		const sql =
			'INSERT INTO employees (firstName,lastName,age,sex,phoneNumber) ' +
			'VALUES(?,?,?,?,?)';
		connection.query(sql, [...data], (err: any) => {
			if (err) {
				console.error('Error loading data:', err);
				return res.status(500).send('Internal Server Error');
			}
			res.status(201).send('Inserted Successfully');
		});
	}
);

export const searchEmployee = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = `SELECT * FROM employees WHERE id=?`;
		connection.query(sql, req.query.value, (err: any, rows: any) => {
			if (err) {
				console.error('Error loading data:', err);
				return res.status(500).send('Internal Server Error');
			}
			res.status(200).send(rows);
		});
	}
);

export const showEmployees = asyncHandler(
	async (req: Request, res: Response) => {
		connection.query('SELECT * FROM employees', (err: any, rows: any) => {
			if (err) {
				console.error('Error loading data:', err);
				return res.status(500).send('Internal Server Error');
			}
			res.status(200).send(rows);
		});
	}
);

export const updateEmployees = asyncHandler(
	async (req: Request, res: Response) => {
		const { firstName, lastName, age, sex, phoneNumber, id } = req.body;
		const data = [firstName, lastName, age, sex, phoneNumber, id];
		const sql =
			'UPDATE employees ' +
			'SET firstName=?,lastName=?,age=?,sex=?,phoneNumber=? ' +
			'WHERE id=?';
		connection.query(sql, [...data], (err: any) => {
			if (err) {
				console.error('Error loading data:', err);
				return res.status(500).send('Internal Server Error');
			}
			res.status(201).send('Data Updated Successfully');
		});
	}
);

export const sortFnameASC = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = 'SELECT * FROM employees ORDER BY firstName ASC';
		connection.query(sql, (err: any, rows: any) => {
			if (err) throw err;
			res.send(rows);
			res.end();
		});
	}
);

export const sortFnameDESC = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = 'SELECT * FROM employees ORDER BY firstName DESC';
		connection.query(sql, (err: any, rows: any) => {
			if (err) throw err;
			res.send(rows);
			res.end();
		});
	}
);

export const sortLnameASC = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = 'SELECT * FROM employees ORDER BY lastName ASC';
		connection.query(sql, (err: any, rows: any) => {
			if (err) throw err;
			res.send(rows);
			res.end();
		});
	}
);

export const sortLnameDESC = asyncHandler(
	async (req: Request, res: Response) => {
		const sql = 'SELECT * FROM employees ORDER BY lastName DESC';
		connection.query(sql, (err: any, rows: any) => {
			if (err) throw err;
			res.send(rows);
			res.end();
		});
	}
);

export const sortAgeASC = asyncHandler(async (req: Request, res: Response) => {
	const sql = 'SELECT * FROM employees ORDER BY age ASC';
	connection.query(sql, (err: any, rows: any) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});

export const sortAgeDESC = asyncHandler(async (req: Request, res: Response) => {
	const sql = 'SELECT * FROM employees ORDER BY age DESC';
	connection.query(sql, (err: any, rows: any) => {
		if (err) throw err;
		res.send(rows);
		res.end();
	});
});
