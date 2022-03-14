const express = require("express");
const pg = require("pg").Pool;
const cors = require("cors");

const app = express();
const PORT = 8000;
const pool = new pg({
	database: "strive",
	user: 'read_only',
	password: "readread",
});
pool.connect();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Gets character names, cuz why not?
app.get("/characters", async (_, res) => {
	try {
		const char_query = await pool.query("SELECT * FROM characters;");
		res.send(char_query);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});

// Gets requested character move list.
app.get("/:character", async (req, res) => {
	// console.log(req.params.character);
	try {
		const move_query = await pool.query(
			`SELECT characters.character_name, move_list.move_name
			FROM characters JOIN move_list
			ON characters.character_id = move_list.character_id
			WHERE LOWER(characters.character_name)
			LIKE LOWER($1)
			ORDER BY move_id;`,
			[req.params.character.replace("_", " ")]
		);
		res.send(move_query.rows);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});


// Gets requested move data.
app.get("/:character/:move", async (req, res) => {
	// console.log(req.params.character, req.params.move);
	try {
		const move_query = await pool.query(
			`SELECT characters.character_name, move_list.*
			FROM characters RIGHT JOIN move_list
			ON characters.character_id = move_list.character_id
			WHERE LOWER(characters.character_name) LIKE LOWER($1)
			AND LOWER(move_list.move_name) LIKE LOWER($2)
			ORDER BY move_id;`,
			[req.params.character.replace("_", " "), req.params.move]
		);
		res.send(move_query);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});


app.listen(PORT, () => {
	console.log(`Heaven or Hell. Port: ${PORT}`);
});