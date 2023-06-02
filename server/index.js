const express = require('express');
const { notFound, errorHandler } = require('./src/middleware');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const router = require('./src/routes');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(router);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Runniing on http://localhost:${PORT}`);
});
