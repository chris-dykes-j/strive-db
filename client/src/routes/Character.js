import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import List from './components/List';
import ram from "./../images/RamIdle.gif";
import Data from './components/Data';

const Character = ({ charPath, charName }) => {
	const [attacks, setAttacks] = useState();
	const getAttacks = async () => {
		const response = await fetch(`http://localhost:8000/${charPath}`)
			.then(response => response.json())
			.catch((error) => console.error(error));
		setAttacks(response);
	}
	useEffect(() => getAttacks(), []);

	return (
		<div>
			<Header title={charName} />
			<Image gif={ram} />
			<List items={attacks} />
			<Data />
		</div>
	)
};

export default Character;


// <Data moveData={moveData} />