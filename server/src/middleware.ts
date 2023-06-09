import { NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
	res.status(404);
	const error = new Error(req.originalUrl);
	next(error);
}

export function errorHandler(
	error: { message: any; stack: any },
	request: any,
	response: {
		status: (arg0: any) => void;
		statusCode: any;
		json: (arg0: { message: any; stack: any }) => void;
	},
	next: any
) {
	response.status(response.statusCode || 500);
	response.json({
		message: error.message,
		stack: error.stack,
	});
}
