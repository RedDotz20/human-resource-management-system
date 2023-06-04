const express = require('express');
const { notFound, errorHandler } = require('./src/middleware');
const { urlencoded } = require('body-parser');
const cors = require('cors');
const router = require('./src/routes');
const hpp = require('hpp');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(morgan('dev'));
app.use(helmet());

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(hpp());

app.use(router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Runniing on http://localhost:${PORT}`);
});
