import connection from '../config/dbConnection';

const employeesTable =
	'CREATE TABLE IF NOT EXISTS `employees` (\n' +
	'  `id` int NOT NULL AUTO_INCREMENT,\n' +
	'  `firstName` varchar(255) DEFAULT NULL,\n' +
	'  `lastName` varchar(255) DEFAULT NULL,\n' +
	'  `age` int DEFAULT NULL,\n' +
	'  `sex` varchar(1) DEFAULT NULL,\n' +
	'  `phoneNumber` varchar(255) DEFAULT NULL,\n' +
	'   PRIMARY KEY (`id`)\n' +
	') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n';

export async function initEmployeeTable() {
	try {
		connection.execute(employeesTable);
		console.log(`Table Sucessfully Synced`);
	} catch (err) {
		console.error(`Error executing SQL file:`, err);
	}
}
