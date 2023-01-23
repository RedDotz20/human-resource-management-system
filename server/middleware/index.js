function notFound(request, response, next) {
	response.status(404);
	const error = new Error("Not Found", req.originalUrl);
	next(error);
}

function errorHandler(error, request, response, next) {
	response.status(response.statusCode || 500);
	response.json({
		message: error.message,
		stack: error.stack,
	});
}

module.exports = {
	notFound,
	errorHandler,
};
