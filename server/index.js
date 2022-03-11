const express = require("express");
const pg = require("pg").Pool;

const app = express();
const PORT = 8000;
const pool = new pg({
	database: "strive",
	user: 'read_only',
	password: "readread",
});
pool.connect();
app.use(express.json());

app.get("/", async (req, res) => {
	try {
		const ram_query = await pool.query("SELECT * FROM move_list");
		console.log(ram_query);
		res.send(ram_query);
	}
	catch (err) {
		if (err) { console.log(err); }
	}

});

app.listen(PORT, () => {
	console.log(`Heaven or Hell. Port: ${PORT}`);
});