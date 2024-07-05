import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import middleware  from './middleware/error.middleware';
import employeeRouter from './routes/employee.routes';
import { initEmployeeTable } from './model/model';

dotenv.config();
const app: express.Application = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json({ limit: '1mb' }));
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(helmet());
app.use(hpp());

app.use(employeeRouter);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("hello world")
})

app.listen(SERVER_PORT, () => {
	initEmployeeTable()
		.then(() => {
			console.log(`Running on http://localhost:${SERVER_PORT}`);
		})
		.catch((error: Error) => {
			throw error;
		});
});
