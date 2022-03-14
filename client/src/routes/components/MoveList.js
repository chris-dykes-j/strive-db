import React, { useState, useEffect } from 'react';

const MoveList = () => {
	const [attacks, setAttacks] = useState();
	const getAttacks = async () => {
		const response = await fetch("http://localhost:8000/ramlethal_valentine")
			.then(response => response.json())
			.catch((error) => console.error(error));
		console.log(response[0]["move_name"]);
		setAttacks(response);
	}
	useEffect(() => getAttacks(), []);
	return (
		<div>
			{attacks && attacks.map(attack => (
				<h3 key={attacks.indexOf(attack)}>{attack.move_name.replace("_", " ")}</h3>
			))}
		</div>
	);
};

MoveList.defaultProps = {
	title: "Move List"
};

export default MoveList;