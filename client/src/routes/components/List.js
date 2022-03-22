import React, { useState, useEffect } from 'react';

const List = ({ items }) => {
	const [moveData, setMove] = useState();
	const getMove = async () => {
		// Grabs 5P data now, but will need more options.
		const response = await fetch(`http://localhost:8000/ramlethal_valentine/5P`)
			.then(response => response.json())
			.catch((error) => console.error(error));
		setMove(response);
		console.log(response);
	}
	useEffect(() => getMove(), []);
	return (
		<ul>
			{items && items.map(item => (
				<li key={items.indexOf(item)} >{item}</li>
			))}
		</ul>
	);
};

export default List;