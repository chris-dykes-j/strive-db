import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import List from './components/List';

const Character = ({ charPath, charName, charIdle }) => {
	const [charAttacks, setAttacks] = useState();
	useEffect(() => {
		async function getAttacks() {
			const response = await fetch(`http://localhost:8000/${charPath}`)
				.then(response => response.json())
				.catch((error) => console.error(error));
			setAttacks(response);
			console.log(response);
		}
	}, []);

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