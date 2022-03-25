import React, { useState, useEffect } from 'react';

const Entry = ({ move, character }) => {
	function test() {
		const [moveData, setMove] = useState();
		const getMove = async () => {
			const response = await fetch(`http://localhost:8000/${character}/${move}`)
				.then(response => response.json())
				.catch((error) => console.error(error));
			setMove(response[0]);
		}
		useEffect(() => getMove(), []);
		return moveData;
	}
	return (
		<div>
			<button >{move}</button>
		</div>
	)
};

export default Entry;