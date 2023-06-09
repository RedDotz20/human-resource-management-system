import { urlencoded } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { errorHandler, notFound } from './middleware';
import router from './routes';

import { initializeTable } from './model';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(morgan('dev'));
app.use(helmet());

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(hpp());

app.use(router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	initializeTable()
		.then(() => {
			console.log(`Running on http://localhost:${PORT}`);
		})
		.catch((error: Error) => {
			throw error;
		});
});
