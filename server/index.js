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

// Default homepage. Getting data for Ram right now, but should be fixed later.
app.get("/", async (_, res) => {
	try {
		const ram_query = await pool.query("SELECT * FROM move_list");
		// console.log(ram_query);
		res.send(ram_query);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});

app.get("/:character", async (req, res) => {
	console.log(req.params.id);
	try {
		const move_query = await pool.query(
			`SELECT characters.character_name, move_list.*
			FROM characters
			JOIN move_list
			ON characters.character_id = move_list.character_id
			
			ORDER BY move_id;`);
		// How to get :character? Below not working.
		// WHERE characters.character_name LIKE '%${req.params.id}%'
		res.send(move_query);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
})

app.listen(PORT, () => {
	console.log(`Heaven or Hell. Port: ${PORT}`);
});