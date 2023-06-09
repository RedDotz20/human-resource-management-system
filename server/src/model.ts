import connection from './dbConnection';

const employeesTable =
	'CREATE TABLE IF NOT EXISTS `employees` (\n' +
	'  id INT NOT NULL,\n' +
	'  firstName VARCHAR(255) NULL,\n' +
	'  lastName VARCHAR(255) NULL,\n' +
	'  age INT NULL,\n' +
	'  sex VARCHAR(1) NULL,\n' +
	'  phoneNumber VARCHAR(255) NULL,\n' +
	'  PRIMARY KEY (id)\n' +
	');\n';

export async function initializeTable() {
	try {
		connection.execute(employeesTable);
		console.log(`Table Sucessfully Synced`);
	} catch (err) {
		console.error(`Error executing SQL file:`, err);
	}
}
