// const mysql = require('mysql2');
// require('dotenv').config();

import dotenv from 'dotenv';
import { createConnection } from 'mysql2';
dotenv.config();

const connection = createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

export default connection;
