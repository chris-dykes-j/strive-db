import React, { useState, useEffect } from 'react';

const Entry = ({ move }) => {
	const [moveData, setMove] = useState();
	const getMove = async () => {
		const response = await fetch(`http://localhost:8000/ramlethal_valentine/${move}`)
			.then(response => response.json())
			.catch((error) => console.error(error));
		setMove(response);
	}
	useEffect(() => getMove(), []);
	return (
		<div>
			<button>{move}</button>
		</div>
	)
};

export default Entry;