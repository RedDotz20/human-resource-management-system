const express = require("express");
const { notFound, errorHandler } = require("./middleware/index");
const { urlencoded } = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

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
