import React, { useState, useEffect } from 'react';

const Data = ({ move }) => {
	const [moveData, setMove] = useState();
	const getMove = async () => {
		// Grabs 5P data now, but will need more options.
		const response = await fetch(`http://localhost:8000/ramlethal_valentine/erarlumo`)
			.then(response => response.json())
			.catch((error) => console.error(error));
		setMove(response);
		console.log(response["move_name"]);
	}
	useEffect(() => getMove(), []);
	function test() { console.log(moveData) }
	return (
		<div>
			<button onClick={test}>Test Me</button>
		</div>
	)
};

export default Data;