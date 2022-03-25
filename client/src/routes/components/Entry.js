import React, { useState, useEffect } from 'react';

const Entry = ({ move }) => {
	const [moveData, setMove] = useState();
	function pickMove() {
		const getMove = async () => {
			const response = await fetch(`http://localhost:8000/ramlethal_valentine/${move}`)
				.then(response => response.json())
				.catch((error) => console.error(error));
			setMove(response);
		}
		useEffect(() => getMove(), []);
		console.log(moveData);
	}
	return (
		<div>
			<button onClick={pickMove()}>{move}</button>
		</div>
	)
};

export default Entry;