const express = require("express");
const app = express();
const { notFound, errorHandler } = require("./middleware/index"),
	{ urlencoded } = require("body-parser"),
	cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

const deleteRoute = require("./routes/delete");

//* Main Routes
app.use(require("./routes/read")); //? Show Employees
app.use(require("./routes/insert")); //? Insert Employee
app.use(require("./routes/update")); //? Update Employee
app.use(require("./routes/delete")); //? Delete Employee

app.use(require("./routes/query")); //? Search Query
app.use(require("./routes/sort")); //? Sort Table

//! Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
