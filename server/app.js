const { notFound, errorHandler } = require("./middleware/index"),
	con = require("./database/connection"),
	bodyParser = require("body-parser"),
	express = require("express"),
	mysql = require("mysql2"),
	cors = require("cors"),
	app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/read")); //? Show Employees
app.use(require("./routes/insert")); //? Insert Employee
app.use(require("./routes/update")); //? Update Employee
app.use(require("./routes/delete")); //? Delete Employee

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Runniing on http://localhost:${PORT}`);
});
