const { notFound, errorHandler } = require("./middleware/index"),
	bodyParser = require("body-parser"),
	express = require("express"),
	cors = require("cors"),
	app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Main Routes
app.use(require("./routes/read")); //? Show Employees
app.use(require("./routes/insert")); //? Insert Employee
app.use(require("./routes/update")); //? Update Employee
app.use(require("./routes/delete")); //? Delete Employee

app.use(require("./routes/query"));

//! Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
