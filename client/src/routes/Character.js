import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import List from './components/List';

const Character = ({ charPath, charName, charIdle }) => {
	const [charAttacks, setAttacks] = useState();
	const getAttacks = async () => {
		const response = await fetch(`http://localhost:8000/${charPath}`)
			.then(response => response.json())
			.catch((error) => console.error(error));
		setAttacks(response);
	}
	useEffect(() => getAttacks(), []);

	return (
		<div>
			<a href="/">Home</a>
			<Header title={charName} />
			<Image gif={charIdle} />
			<List items={charAttacks} character={charName.toLowerCase().replace(" ", "_")} />
		</div>
	)
};

export default Character;


// <Data moveData={moveData} />