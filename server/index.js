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
	try {
		const move_query = await pool.query(
			`SELECT characters.character_name, move_list.move_name, move_list.input
			FROM characters JOIN move_list
			ON characters.character_id = move_list.character_id
			WHERE LOWER(characters.character_name)
			LIKE LOWER($1)
			ORDER BY move_id;`,
			[req.params.character]
		);

		// Nested if is not pretty, but this makes sure that moves of the same name have their inputs attached.
		// Fixes a silly react error, and was more desirable anyways.
		const move_list = move_query.rows.map((attack, i, rows) => {
			if (i > 0 && i < move_query.rows.length - 1) {
				if (rows[i]["move_name"] === rows[i + 1]["move_name"] || rows[i]["move_name"] === rows[i - 1]["move_name"]) {
					let res = `${attack.move_name} (${attack.input})`;
					return res.replace(/_/g, " ");
				}
			}
			return attack.move_name.replace(/_/g, " ");
		});
		res.send(move_list);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});


// Gets requested move data.
app.get("/:character/:move", async (req, res) => {
	try {
		const move_query = await pool.query(
			`SELECT characters.character_name, move_list.*
			FROM characters RIGHT JOIN move_list
			ON characters.character_id = move_list.character_id
			WHERE LOWER(characters.character_name) LIKE LOWER($1)
			AND LOWER(move_list.move_name) LIKE LOWER($2)
			ORDER BY move_id;`,
			[req.params.character.replace(/_/g, " "), req.params.move]
		);
		res.send(move_query.rows[0]);
	}
	catch (err) {
		if (err) { console.log(err); }
	}
});


app.listen(PORT, () => {
	console.log(`Heaven or Hell. Port: ${PORT}`);
});