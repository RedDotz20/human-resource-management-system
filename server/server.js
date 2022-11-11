const app = require("./app");
require("dotenv").config();
// require("dotenv").config({ path: "../client/.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`runniing on http://localhost:${PORT}`);
});
