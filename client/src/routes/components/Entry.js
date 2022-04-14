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
	}, []);
	const test = () => console.log(moveData);
	return (
		<div>
			<button onClick={test}>{move}</button>
		</div>
	)
};

export default Entry;