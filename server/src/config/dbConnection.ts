import dotenv from 'dotenv';
import { createConnection } from 'mysql2';
dotenv.config();

const connection = createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: parseInt(process.env.DB_PORT)
});

export default connection;
