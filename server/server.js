const app = require("./app");
require("dotenv").config();

const PORT = 3000;

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Runniing on http://localhost:${PORT}`);
});
