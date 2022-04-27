import React, { useState, useEffect } from 'react';

const Entry = ({ move, character }) => {
	const [moveData, setMove] = useState();
	useEffect(() => {
		async function getMove() {
			const response = await fetch(`http://localhost:8000/${character}/${move}`)
				.then(response => response.json())
				.catch((error) => console.error(error));
			setMove(response);
		}
		getMove();
	}, [character, move]);
	return (
		<div>
			<button>{move}</button>
		</div>
	)
};

export default Entry;