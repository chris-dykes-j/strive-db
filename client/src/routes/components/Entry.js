import React, { useState, useEffect } from 'react';

const Entry = ({ character, move, sendData }) => {
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
	console.log(moveData)
	//const makeTable = () => this.setTable({ move });
	return (
		<div>
			<button onClick={sendData}>{move}</button>
		</div>
	)
};

export default Entry;